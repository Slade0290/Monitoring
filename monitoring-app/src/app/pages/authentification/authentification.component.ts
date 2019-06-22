import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.less']
})
export class AuthentificationComponent implements OnInit {

  formLogin = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    console.log("Authentification: loginUser");
    this.authService.loginUser(
              this.formLogin.email,
              this.formLogin.password)
    .subscribe(
      res => {
        console.log(res);
        this.authService.setLoggedIn(true)
        this.router.navigate(['sidebar'])
        alert("Welcome " + this.formLogin.email)
      },
      err => {
        console.log(err.message);
        this.authService.setLoggedIn(false)
        alert("Invalid credential")
      })
  }

  // getLogin() {
  //   console.log("Authentification: getLogin");
  //   this.authService.getLogin()
  // }


}
