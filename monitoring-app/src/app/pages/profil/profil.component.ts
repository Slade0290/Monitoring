import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.less']
})
export class ProfilComponent implements OnInit {

    user;
    userid;

    constructor(private usersService:UsersService,
                private route:ActivatedRoute,
                private router:Router) {

      this.usersService.getUser().subscribe(user=>{
        this.user=user;
        console.log(user);
      })
     }

    ngOnInit() {

    }
  }
