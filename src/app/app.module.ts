import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CarmemberModule } from './modules/carmember/carmember-list/carmember.module';
import { CarmemberaddModule } from './modules/carmember/carmember-add/carmemberadd.module';


import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SidebarRightComponent } from './layouts/sidebar-right/sidebar-right.component';
import { NotFoundComponent } from './modules/error-pages/not-found/not-found.component';
import { InternalServerComponent } from './modules/error-pages/internal-server/internal-server.component';
import { LazyLoadScriptService } from './shared/services/lazy-load-script.service';
import { CarmemberEditComponent } from './modules/carmember/carmember-edit/carmember-edit/carmember-edit.component';
import { CarmemberEditModule } from './modules/carmember/carmember-edit/carmember-edit.module';
import { CarmemberdetailModule } from './modules/carmember/carmember-detail/carmemberdetail.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    LayoutMainComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
    InternalServerComponent,
    SidebarRightComponent,
    CarmemberEditComponent
    
  ],
  imports: [
  BrowserModule,
  CoreModule,
  AuthModule,
  DashboardModule,
  CarmemberModule,
  CarmemberaddModule,
  CarmemberEditModule,
  CarmemberdetailModule,
  AppRoutingModule,
  HttpClientModule

  ],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
