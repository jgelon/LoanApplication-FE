import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants/constants';
import { LoanComment } from '../model/loancomment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentUrl: string;

  constructor(
      private http: HttpClient,
      private _tokenStorage: TokenStorageService
    ) {
    this.commentUrl = BASE_URL + '/comments';
  }

  public findAll(id: any): Observable<LoanComment[]> {
    return this.http.get<LoanComment[]>(`${this.commentUrl}/request/${id}`);
  }

  public post(comment: LoanComment) {
    return this.http.post<LoanComment>(`${this.commentUrl}/request/${comment.requestId}`, comment.text);
  }

  public put(comment: LoanComment) {
    return this.http.put<LoanComment>(`${this.commentUrl}/comment/${comment.requestId}`, comment);
  }

  public delete(comment: LoanComment) {
    return this.http.delete(`${this.commentUrl}/comment/${comment.requestId}`);
  }

  public get(commentId: any) {
    return this.http.delete(`${this.commentUrl}/comment/${commentId}`);
  }
}
