import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

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
      if(data.success) {
        //redirect to /dashboard
        this.router.navigate(['dashboard']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message)
      }
    });
    console.log(login, password);
  }
}
