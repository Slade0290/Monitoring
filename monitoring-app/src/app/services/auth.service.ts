import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  private loggedInStatus = false;

  datatopost;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Mutators
  setLoggedIn(value: boolean) {
    console.log("setLoggedIn:", value)
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    console.log("isLoggedIn")
    return this.loggedInStatus;
  }

  // Login an user
  loginUser(email, password) {

    const payload = 
    {
      "email": email,
      "password": password
    }

    this.datatopost = JSON.stringify(payload);

    return this.http.post("http://localhost:3000/authentification/",
                          this.datatopost,
                          this.httpOptions)
  }

  // Using php
  // getUserDetails(login, password) {
  //   return this.http.post('/api/auth.php', {
  //     login,
  //     password
  //   })
  // }
}
