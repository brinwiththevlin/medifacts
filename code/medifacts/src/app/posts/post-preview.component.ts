import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html'
//  styleUrls: ['./tasks.page.scss'],
})

export class PostPreview  implements  OnInit{

  
 posts$ = collectionData(collection(this.firestore, 'posts' )) as Observable<Post[]>;
  constructor(public router: Router, private readonly firestore: Firestore ) {}
  ngOnInit(): void {
      
  }
}