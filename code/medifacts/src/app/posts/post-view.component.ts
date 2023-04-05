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
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
//  styleUrls: ['./tasks.page.scss'],
})

export class PostView  implements  OnInit {  
  constructor(public router: Router, private readonly firestore: Firestore ) {}
  ngOnInit(): void {
      
  }
}

// export interface Post{
//   user: string;
//   post_text: string;
// }
