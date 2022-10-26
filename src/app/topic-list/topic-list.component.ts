import { Component, OnInit } from '@angular/core';
import { HackerNewsService, Question } from '../services/hacker-news.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  public questionsList: Array<Question> = [];
  constructor(private hackerNewsService: HackerNewsService) {

  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.hackerNewsService.getAllNewsId().subscribe(async res => {
      const questions = res.slice(0, 20);

      Promise.all(
        questions.map(async questionId => {
          this.hackerNewsService.getNewsDetailById(questionId).toPromise()
            .then(async val => {
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
