import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterPage{ 
    constructor(public router: Router){
    }
    ngOnInit(): void {}}