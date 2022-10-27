import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './http.util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  questionDetail: Question;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private hackerNewsPrefix = 'https://hacker-news.firebaseio.com/v0/';
  private hackerNewsSuffix = '.json?print=pretty';

  getAllNewsId() {
    const url = `${this.hackerNewsPrefix}askstories${this.hackerNewsSuffix}`;

    return this.http.get<Array<number>>(url, httpOptions);
  }

  getNewsDetailById(id: number) {
    const url = `${this.hackerNewsPrefix}item/${id}${this.hackerNewsSuffix}`;
    return this.http.get<Question>(url, httpOptions);
  }

  openQuestionDetail(question: Question) {
    this.router.navigate(['detail']);
    this.questionDetail = question;
  }
}

export interface Question {

  readonly by: string;
  readonly descendants: number;
  readonly id: number;
  readonly kids: Array<number>;
  readonly score: number;
  readonly text: string;
  readonly time: number;
  readonly title: string;
  readonly type: string;

}
