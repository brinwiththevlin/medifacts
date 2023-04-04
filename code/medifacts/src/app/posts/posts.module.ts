import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { PostsPageRoutingModule } from './posts-routing.module';

//import { FileSizePipeModule } from '../shared/pipes/file-size.pipe.module';
//import { TaskPage } from './task/task.page';
import { PostsPage } from '../posts/posts.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PostsPageRoutingModule, RouterModule
   // FileSizePipeModule,
  ]
 // declarations: [PostsPage]
})
export class PostsPageModule {}
