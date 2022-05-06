import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanComment } from 'src/app/model/loancomment';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-requestcomments',
  templateUrl: './requestcomments.component.html',
  styleUrls: ['./requestcomments.component.css']
})
export class RequestcommentsComponent implements OnInit {
  comments: LoanComment[];

  commentForm: FormGroup;
  loanId: number;

  constructor(
    private _commentService: CommentsService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loanId = Number(this._route.snapshot.paramMap.get('id'));
    this.loadComments();

    this.commentForm = this._formBuilder.group({
      commenttext: ['', Validators.required]
    });
  }

  loadComments() {
    this._commentService.findAll(this.loanId).subscribe(data => {
      this.comments = data;
    });
  }

  submit() {
    let loanComment = new LoanComment();
    loanComment.requestId = this.loanId
    loanComment.text = this.commentForm.value.commenttext;
    this._commentService.post(loanComment).subscribe(data => {
      this.comments.push(data);
      this.commentForm.reset();
    });
  }

}
