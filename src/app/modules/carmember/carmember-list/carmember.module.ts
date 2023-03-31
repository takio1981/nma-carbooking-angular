import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarmemberRoutingModule } from './carmember-routing.module';
import { CarmemberComponent } from './carmember/carmember.component';


@NgModule({
  declarations: [
    CarmemberComponent
  ],
  imports: [
    CommonModule,
    CarmemberRoutingModule,
    HttpClientModule
  ]
})
export class CarmemberModule { }
