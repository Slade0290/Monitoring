import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "http://localhost:3000/dashboard/";

  datatopost;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient, private router:Router) {

  }

  // get all data
  getData() {
    return this.http.get(this.apiUrl);
  }

  // suppression d'un user
  delete(id) {
    return this.http.delete(this.apiUrl + id);
  }
}
