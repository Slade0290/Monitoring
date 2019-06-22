import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthentificationComponent} from './pages/authentification/authentification.component';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HomeComponent} from './pages/home/home.component';
import {WebterminalComponent} from './pages/webterminal/webterminal.component';
import {ProfilComponent} from './pages/profil/profil.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { LogoutComponent } from './pages/logout/logout.component';

import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
    {
        path:'',
        component:AuthentificationComponent,
    },
    {
        path:'authentification',
        component:AuthentificationComponent,
    },
    {
        path:'register',
        component:RegisterComponent,
    },
    {
        path:'webterminal',
        component:WebterminalComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'profil',
        component:ProfilComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'user-management',
        component:UserManagementComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'logout',
        component:LogoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'aboutus',
        component:AboutusComponent,
        canActivate: [AuthGuard]
    },
    {
         path:'dashboard',
         component:DashboardComponent,
         canActivate: [AuthGuard]
    },
    {
        path:'sidebar',
        component:SidebarComponent,
        canActivate: [AuthGuard]
    }
   //...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
