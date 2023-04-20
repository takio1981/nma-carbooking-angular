import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarmemberEditRoutingModule } from './carmember-edit-routing.module';
import { CarmemberEditComponent } from './carmember-edit/carmember-edit.component';



@NgModule({
  declarations: [
    CarmemberEditComponent
  ],
  imports: [
    CommonModule,
    CarmemberEditRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CarmemberEditModule { }
