import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.less']
})
export class ProfilComponent implements OnInit {

    user;

    constructor(private authService:AuthService) {

     console.log("Profile constructor: before calling getLogin")
     this.user = this.authService.user

     //  console.log("Profile constructor: before calling getLogin")
     //  this.authService.getLogin().then(function() {
     //      console.log(" Profile constructor: ",this.authService.user)
     //      this.user = this.authService.user
     //  })
     }

    ngOnInit() {

    }

  }
