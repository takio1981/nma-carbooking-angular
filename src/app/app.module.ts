import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SidebarRightComponent } from './layouts/sidebar-right/sidebar-right.component';
import { NotFoundComponent } from './modules/error-pages/not-found/not-found.component';
import { InternalServerComponent } from './modules/error-pages/internal-server/internal-server.component';
import { CarmemberAddComponent } from './modules/carmember/carmember-add/carmember-add.component';
import { CarmemberEditComponent } from './modules/carmember/carmember-edit/carmember-edit.component';

import { LazyLoadScriptService } from './shared/services/lazy-load-script.service';
import { CarmemberComponent } from './modules/carmember/carmember-list/carmember.component';

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
    CarmemberComponent,
    CarmemberAddComponent,
    CarmemberEditComponent
    
  ],
  imports: [
  BrowserModule,
  CoreModule,
  AuthModule,
  HomeModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
