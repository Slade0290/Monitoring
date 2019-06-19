import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = "http://localhost:3000/user-management/";

  datatopost;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient, private router:Router) {

  }

  // get all users
  getUsers() {
    return this.http.get(this.apiUrl);
  }

  // get one user by Id
  getUser(id) {
    return this.http.get("http://localhost:3000/profil/" + id);
  }

  // create a user
  createUser(lastname, firstname, email, password, admin, sudo) {
    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "lastname": lastname,
      "firstname": firstname,
      "email": email,
      "password": password,
      "admin": admin,
      "sudo": sudo
    }

    // conversion en jSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post("http://localhost:3000/register", this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
  }

  // mise à jour Droit d'Admin
  updatedAdminUser(admin,id) {

    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "admin": admin
    }
    // conversion en JSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.put("http://localhost:3000/user-management/admin/" + id, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );

  }

  // mise à jour Droit Sudo
  updatedSudoUser(sudo,id) {

    // body envoyé dans la requête, appelé payload
    const payload =
    {
      "sudo": sudo
    }
    // conversion en JSON
    this.datatopost = JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.put("http://localhost:3000/user-management/sudo/" + id, this.datatopost, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );

  }

  // suppression d'un user
  delete(id) {
    return this.http.delete(this.apiUrl + id);
  }
}
