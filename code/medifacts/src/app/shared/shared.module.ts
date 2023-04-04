import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule
    ],
    declarations: [
        // add components
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
        // add components
    ]
  })
  export class SharedModule {}