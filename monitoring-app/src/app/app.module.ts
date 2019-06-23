import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { WebterminalComponent } from './pages/webterminal/webterminal.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

import {UsersService} from './services/users.service';
import {AuthService} from './services/auth.service';
import {UserPHPService} from './services/user-php.service';
import {DataService} from './services/data.service';

import {AuthGuard} from './guard/auth.guard';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    DashboardComponent,
    RegisterComponent,
    HomeComponent,
    WebterminalComponent,
    ProfilComponent,
    SidebarComponent,
    AboutusComponent,
    UserManagementComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersService,
    UserPHPService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
