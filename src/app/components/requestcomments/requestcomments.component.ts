import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorityArea, AuthorityLevel } from 'src/app/constants/authority';
import { LoanComment } from 'src/app/model/loancomment';
import { AuthService } from 'src/app/service/auth.service';
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

  authorizedWrite = false;

  constructor(
    private _commentService: CommentsService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loanId = Number(this._route.snapshot.paramMap.get('id'));
    this.loadComments();

    this.commentForm = this._formBuilder.group({
      commenttext: ['', Validators.required]
    });
    this.authorizedWrite = this._authService.hasAccess(AuthorityArea.COMMENT, AuthorityLevel.WRITE);
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
