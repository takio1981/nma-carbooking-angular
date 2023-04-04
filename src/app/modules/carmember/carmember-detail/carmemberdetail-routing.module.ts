import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '@app/layouts/layout-main/layout-main.component';
import { CarmemberdetailComponent } from './carmemberdetail/carmemberdetail.component';

const routes: Routes = [
  {
    path: 'carmember/detail/:id',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberdetailComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarmemberdetailRoutingModule { }
