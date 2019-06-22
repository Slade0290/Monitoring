import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UsersService, 
      			  private router: Router,
      			  private auth: AuthService) { }

  ngOnInit() {
  	// this.user.logout().subscribe(data => {
    //  console.log("Logout: ", data.success)
  	// 	if(data.success) {
  	// 		this.router.navigate(['']);
  	// 		this.auth.setLoggedIn(false);
  	// 	} else {
  	// 		window.alert('Some problem');
  	// 	}
  	// })
    this.user.logout().subscribe(
      res => {
        console.log("Logout:", res)
        this.router.navigate(['']);
        this.auth.setLoggedIn(false);
      }, 
      err => {
        console.log("Logout:", err)
        this.auth.setLoggedIn(true);
        window.alert('Some problem');
      })
  }
}
