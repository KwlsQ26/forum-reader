import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './http.util';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  constructor(private http: HttpClient) { }

  private hackerNewsPrefix = 'https://hacker-news.firebaseio.com/v0/';

  testGet() {
    const url = `${this.hackerNewsPrefix}/item/8863.json?print=pretty`;

    return this.http.get<any>(url, httpOptions);
  }
}
