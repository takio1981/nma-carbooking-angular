import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarmemberRoutingModule } from './carmember-routing.module';
import { CarmemberComponent } from './carmember-list/carmember.component';
import { CarmemberAddModule } from './carmember-add/carmemberadd.module';
import { CarmemberEditModule } from './carmember-edit/carmember-edit.module';
import { CarmemberdetailModule } from './carmember-detail/carmemberdetail.module';



@NgModule({
  declarations: [
    CarmemberComponent
  ],
  imports: [
    CommonModule,
    CarmemberRoutingModule,
    CarmemberAddModule,
    CarmemberEditModule,
    CarmemberdetailModule,
    HttpClientModule
  ]
})
export class CarmemberModule { }
