import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '@app/layouts/layout-main/layout-main.component';
import { CarmemberEditComponent } from './carmember-edit/carmember-edit.component';

const routes: Routes = [
  {
    path: 'editCarMember/:car_id',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarmemberEditRoutingModule { }
