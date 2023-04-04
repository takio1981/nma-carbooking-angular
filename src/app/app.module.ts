import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


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
import { CarmemberModule } from './modules/carmember/carmember.module';



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
    SidebarRightComponent
    
  ],
  imports: [
  BrowserModule,
  CoreModule,
  AuthModule,
  DashboardModule,
  CarmemberModule,
  HomeModule,
  AppRoutingModule,
  HttpClientModule

  ],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
