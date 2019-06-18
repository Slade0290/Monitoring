import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.less']
})
export class UserManagementComponent implements OnInit {

  users;

  constructor(private usersService:UsersService) {
    this.usersService.getUsers().subscribe(users=>{
      this.users=users;
      console.log(users);
    })
   }

  ngOnInit() {

  }

  deleteUser(id){
    this.usersService
    .delete(id).subscribe(resp=>{
      console.log(resp);
    });
    location.reload();
  }
}
