import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {AuthentificationComponent} from './pages/authentification/authentification.component';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [

    {
        path:'home',
        component:HomeComponent,
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
         path:'dashboard',
         component:DashboardComponent,
    }
   //...
];

@NgModule({
  declarations: [RegisterComponent, AuthentificationComponent],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
