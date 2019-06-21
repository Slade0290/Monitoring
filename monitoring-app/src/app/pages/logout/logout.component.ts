import { Component, OnInit } from '@angular/core';
import { UserPHPService } from '../../services/user-php.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserPHPService, 
  			  private router: Router,
  			  private auth: AuthService) { }

  ngOnInit() {
  	this.user.logout().subscribe(data => {
  		if(data.success) {
  			this.router.navigate(['']);
  			this.auth.setLoggedIn(false);
  		} else {
  			window.alert('Some problem');
  		}
  	})
  }

}
