import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarmemberaddRoutingModule } from './carmemberadd-routing.module';
import { CarmemberaddComponent } from './carmemberadd/carmemberadd.component';



@NgModule({
  declarations: [
    CarmemberaddComponent
  ],
  imports: [
    CommonModule,
    CarmemberaddRoutingModule,
    HttpClientModule
  ]
})
export class CarmemberaddModule { }
