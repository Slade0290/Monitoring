import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { WebterminalComponent } from './pages/webterminal/webterminal.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';


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
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
