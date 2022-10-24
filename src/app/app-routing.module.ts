import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailTopicComponent } from './detail-topic/detail-topic.component';
import { TopicListComponent } from './topic-list/topic-list.component';

const routes: Routes = [
  {
    path: '',
    component: TopicListComponent,
  },
  {
    path: 'detail',
    component: DetailTopicComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
