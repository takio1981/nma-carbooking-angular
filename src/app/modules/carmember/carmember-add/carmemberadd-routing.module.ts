import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '@app/layouts/layout-main/layout-main.component';
import { CarmemberaddComponent } from './carmemberadd/carmemberadd.component';


const routes: Routes = [
  {
    path: 'carmemberadd',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberaddComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarmemberaddRoutingModule { }
