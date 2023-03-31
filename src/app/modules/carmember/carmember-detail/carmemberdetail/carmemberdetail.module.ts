import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarmemberdetailRoutingModule } from './carmemberdetail-routing.module';
import { CarmemberdetailComponent } from './carmemberdetail/carmemberdetail.component';


@NgModule({
  declarations: [
    CarmemberdetailComponent
  ],
  imports: [
    CommonModule,
    CarmemberdetailRoutingModule
  ]
})
export class CarmemberdetailModule { }
