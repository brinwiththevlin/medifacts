import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';
import { Language } from '../models/language.type';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
//  styleUrls: ['./tasks.page.scss'],
})

export class PostsPage  implements  OnInit{

  // For hardcoding posts?
  post1 = {title: "Title",
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
         } as Post;
  
  posts$ = collectionData(collection(this.firestore, 'posts' )) as Observable<Post[]>;
  constructor(public router: Router, private readonly firestore: Firestore ) {}
  ngOnInit(): void {
      
  }
}

// export interface Post{
//   user: string;
//   post_text: string;
// }
