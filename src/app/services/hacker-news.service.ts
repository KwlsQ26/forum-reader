import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './http.util';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  constructor(private http: HttpClient) { }

  private hackerNewsPrefix = 'https://hacker-news.firebaseio.com/v0/';
  private hackerNewsSuffix = '.json?print=pretty';

  getAllNewsId() {
    const url = `${this.hackerNewsPrefix}askstories${this.hackerNewsSuffix}`;

    return this.http
      .get<any>(url, httpOptions);
      // .pipe(concatMap(val => this.http.get(`${this.hackerNewsPrefix}item/${val}${this.hackerNewsSuffix}`)));
  }

  getNewsDetailById(id: number) {
    const url = `${this.hackerNewsPrefix}item/${id}${this.hackerNewsSuffix}`;
    return this.http
      .get<any>(url, httpOptions);
  }
}
