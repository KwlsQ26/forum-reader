import { Component, OnInit } from '@angular/core';
import { forkJoin, zip } from 'rxjs';
import { HackerNewsService } from '../services/hacker-news.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private hackerNewsService: HackerNewsService) { }
  public questionsList = [];
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.hackerNewsService.getAllNewsId().subscribe(res => {
      const questions = res.slice(0, 20);

      Promise.all(
        questions.map(questionId => {
          this.hackerNewsService.getNewsDetailById(questionId).toPromise()
            .then(val => {
              this.questionsList.push(val);
            }).catch(err1 => {
              console.log(err1);
            });
        })
      );
    }, err2 => {
      console.log(err2);
    }
    );
  }

}
