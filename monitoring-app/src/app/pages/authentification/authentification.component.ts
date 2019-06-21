import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.less']
})
export class AuthentificationComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const login = target.querySelector('#login').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(login, password).subscribe(data => {
      console.log(data)
      if(data.success) {        //error here, don't know why but still working
        //redirect to /sidebar
        this.router.navigate(['sidebar']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message)
      }
    })
    console.log(login, password);
  }
}
