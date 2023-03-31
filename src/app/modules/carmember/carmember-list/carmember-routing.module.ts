import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '@app/layouts/layout-main/layout-main.component';
import { CarmemberComponent } from './carmember/carmember.component';

const routes: Routes = [
  {
    path: 'carmember',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarmemberRoutingModule { }
