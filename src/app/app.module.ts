import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { DetailTopicComponent } from './detail-topic/detail-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    DetailTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
