import {Component, Input, OnInit} from '@angular/core';
import {LoanRequestService} from "../../service/loanrequests.service";
import {LoanRequest} from "../../model/loanrequest";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import { CommentsService } from 'src/app/service/comments.service';
import { LoanComment } from 'src/app/model/loancomment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.css']
})
export class ShowRequestComponent implements OnInit {

  loanRequest: LoanRequest;
  comments: LoanComment[];

  commentForm: FormGroup;

  constructor(
    private _loanRequestsService: LoanRequestService,
    private _commentService: CommentsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let loanId = this._route.snapshot.paramMap.get('id');
    this._loanRequestsService.getRequest(loanId).subscribe(data => {
      this.loanRequest = data;
    });
  }

  submit() {
    let loanComment = new LoanComment();
    loanComment.requestId = this.loanRequest.id
    loanComment.text = this.commentForm.value.commenttext;
    this._commentService.post(loanComment).subscribe(data => {
      this.comments.push(data);
      this.commentForm.reset();
    });
  }

}
