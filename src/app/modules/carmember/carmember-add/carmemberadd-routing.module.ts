import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '@app/layouts/layout-main/layout-main.component';
import { CarmemberAddComponent } from './carmemberadd/carmemberadd.component';


const routes: Routes = [
  {
    path: 'carmember/add',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberAddComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarmemberaddRoutingModule { }
