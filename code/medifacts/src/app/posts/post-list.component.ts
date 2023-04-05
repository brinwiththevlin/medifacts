import { Component, Input } from '@angular/core';
import { Language } from '../models/language.type';

import { Post, PostListConfig, PostService } from '../models';
@Component({
  selector: 'app-post-list',
  styleUrls: ['post-list.component.css'],
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  constructor (
    private postService: PostService
  ) {}

  // @Input() limit: number;
  @Input()
  set config(config: PostListConfig) {
    if (config) {
      this.query = config;
      // this.currentPage = 1;
      this.runQuery();
    }
  }

  query: PostListConfig;
  results: Post[];
  loading = false;
  // currentPage = 1;
  // totalPages: Array<number> = [1];

  // setPageTo(pageNumber) {
  //   this.currentPage = pageNumber;
  //   this.runQuery();
  // }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Hard Coded Posts //
    this.loading = false;
    this.results.push({title: "Title",
                       message: "Message",
                       createdAt: new Date(2023, 3, 6),
                       uuid: "",
                       language: "en" as Language,
                       likesCount: 0,
                       dislikesCount: 0,
                       commentsCount: 0,
                       doesUserLike: false,
                       doesUserDislike: false,
                       user: "Test User",
                       post_text: "Post Text"
                      } as Post)
      // ////////////// //

    // Create limit and offset filter (if necessary)
    // if (this.limit) {
    //   this.query.filters.limit = this.limit;
    //   this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    // }

    // this.postService.query(this.query)
    // .subscribe(data => {
    //   this.loading = false;
    //   this.results = data.articles;

    //   // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
    //   // this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    // });
  }
}
