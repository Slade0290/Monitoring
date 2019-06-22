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
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  // Mutators
  setLoggedIn(value: boolean) {
    console.log("Service: setLoggedIn:", value)
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    console.log("Service: isLoggedIn", this.loggedInStatus)
    return this.loggedInStatus;
  }

  // Login an user
  loginUser(email, password) {
    console.log("Service: loginUser");
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

  getLogin() {
    console.log("Service: getLogin")
    return this.http.get("http://localhost:3000/session",
                          {withCredentials: true})
    .subscribe(
      res => {
        console.log(res);
        this.setLoggedIn(true)
      },
      err => {
        console.log(err);
        this.setLoggedIn(false)
      })
  }
}
