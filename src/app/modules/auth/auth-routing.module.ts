import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoginComponent } from '@app/layouts/layout-login/layout-login.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: 'register',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: RegisterComponent },
    ]
  },
  {
    path: 'password',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: PasswordComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
