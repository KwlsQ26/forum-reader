import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../services/hacker-news.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.testGet();
  }

  testGet() {
    this.hackerNewsService.testGet().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    }
    );
  }

}
