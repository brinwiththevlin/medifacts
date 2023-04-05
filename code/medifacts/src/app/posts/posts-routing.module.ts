import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { TaskPage } from './task/task.page';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { PostsPage } from './posts.component';
import { PostPage } from './post/post.component';
const routes: Routes = [
  {
    path: '',
    component: PostsPage,
  },
  {
    path: 'post',
    component: PostPage
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsPageRoutingModule {}
