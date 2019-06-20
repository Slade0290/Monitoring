import { Component, OnInit } from '@angular/core';
import { UserPHPService } from '../../services/user-php.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

	message = "Loading...";

  constructor(private user: UserPHPService) { }

  ngOnInit() {
  	this.user.getSomeData().subscribe(data => {
  		this.message = data.message
      if(!data.success){
        localStorage.removeItem('loggedIn');
      }
  	})
  }

}
