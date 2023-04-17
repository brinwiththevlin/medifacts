import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-registerlogin',
    templateUrl: './registerlogin.component.html'
})

export class RegisterLoginPage{ 
    constructor(public router: Router){
    }
    ngOnInit(): void {}}