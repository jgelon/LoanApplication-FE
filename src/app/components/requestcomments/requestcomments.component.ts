import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanComment } from 'src/app/model/loancomment';
import { AuthService } from 'src/app/service/auth.service';
import { CommentsService } from 'src/app/service/comments.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-requestcomments',
  templateUrl: './requestcomments.component.html',
  styleUrls: ['./requestcomments.component.css']
})
export class RequestcommentsComponent implements OnInit {
  comments: LoanComment[];

  commentForm: FormGroup;
  loanId: number;
  isLoggedIn = false;
  loginForm: any = {
    username: null,
    password: null
  };

  constructor(
    private _commentService: CommentsService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _tokenStorage: TokenStorageService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loanId = Number(this._route.snapshot.paramMap.get('id'));
    this._commentService.findAll(this.loanId).subscribe(data => {
      this.comments = data;
    });

    this.commentForm = this._formBuilder.group({
      commenttext: ['', Validators.required]
    });

    this.isLoggedIn = this._tokenStorage.getToken() != null;
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

  submitLogin() {
    const { username, password } = this.loginForm;

    this._authService.login(username, password).subscribe(
      data => {
        this._tokenStorage.saveToken(data.jwttoken);

        this.isLoggedIn = true;
      },
      err => {
      });
  }

  logout() {
    this._tokenStorage.signOut();
    this.isLoggedIn = false;
  }
}
