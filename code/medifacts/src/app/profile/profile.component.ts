import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-profille',
    templateUrl: './profile.component.html'
})

export class ProfilePage{ 
    constructor(public router: Router){
    }
    ngOnInit(): void {}}