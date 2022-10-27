import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsService, Question } from '../services/hacker-news.service';

@Component({
  selector: 'app-detail-topic',
  templateUrl: './detail-topic.component.html',
  styleUrls: ['./detail-topic.component.css']
})
export class DetailTopicComponent implements OnInit {
  public questionDetail: Question = this.hackerNewsService.questionDetail;
  public comments = [];

  constructor(
    private hackerNewsService: HackerNewsService,
  ) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    const commentsArray = this.questionDetail.kids;

    Promise.all(
      commentsArray.map(questionId => {
        this.hackerNewsService.getNewsDetailById(questionId).toPromise()
          .then(val => {
            this.comments.push(val);
          }).catch(err1 => {
            console.log(err1);
          });
      })
    );
  }
}
