import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { CarmemberAddComponent } from './modules/carmember/carmember-add/carmember-add.component';
import { CarmemberEditComponent } from './modules/carmember/carmember-edit/carmember-edit.component';
import { CarmemberComponent } from './modules/carmember/carmember-list/carmember.component';
import { InternalServerComponent } from './modules/error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './modules/error-pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerComponent },
  // { path: '**', component: NotFoundComponent },
  // { path: 'carmember', component: CarmemberComponent },
  // { path: 'editCarMember/:id', component: CarmemberEditComponent },
  // { path: 'addCarMember', component: CarmemberAddComponent }
  {
    path: 'carmember',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberComponent },
    ]
  },
  {
    path: 'editCarMember/:car_id',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberEditComponent },
    ]
  },
  {
    path: 'addCarMember',
    component: LayoutMainComponent,
    children: [
      { path: '', component: CarmemberAddComponent },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

