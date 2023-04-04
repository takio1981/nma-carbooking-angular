import { BookingComponent } from './pages/booking/booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '@app/layouts/layout-main/layout-main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {  path: 'home',  component: LayoutMainComponent,children: [{ path: '', component: DashboardComponent }]},
  {  path: 'booking', component: LayoutMainComponent ,children: [{ path: '',component: BookingComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

