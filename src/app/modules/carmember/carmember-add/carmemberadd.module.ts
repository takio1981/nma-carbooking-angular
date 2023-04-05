import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarmemberaddRoutingModule } from './carmemberadd-routing.module';
import { CarmemberAddComponent } from './carmemberadd/carmemberadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarmemberAddComponent
  ],
  imports: [
    CommonModule,
    CarmemberaddRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CarmemberAddModule { }
