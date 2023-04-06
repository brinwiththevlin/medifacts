import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "src/app/models/post.interface";

@Component({
    selector: 'app-post', 
    templateUrl: './post.component.html'
})

export class PostPage {
    constructor(public readonly route: Router){}
    ngOnInit(): void {}
}