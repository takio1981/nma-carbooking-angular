import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarmemberEditRoutingModule } from './carmember-edit-routing.module';
import { CarmemberEditComponent } from './carmember-edit/carmember-edit.component';

@NgModule({
  declarations: [
    CarmemberEditComponent
  ],
  imports: [    
    CommonModule,
    CarmemberEditRoutingModule
  ]
})
export class CarmemberEditModule { }
