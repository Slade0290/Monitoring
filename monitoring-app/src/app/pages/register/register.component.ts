import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  formCreate = {
    lastname: "",
    firstname: "",
    email: "",
    password: ""
  }

  constructor(private usersService: UsersService, private route: Router) {

  }

  ngOnInit() {
  }

  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createUser() {
      // on consomme notre service qui a comme arguments les valuers du formulaire
      this.usersService.createUser(
                      this.formCreate.lastname,
                      this.formCreate.firstname,
                      this.formCreate.email,
                      this.formCreate.password);
      this.route.navigate(['/authentification']);
  }
}
