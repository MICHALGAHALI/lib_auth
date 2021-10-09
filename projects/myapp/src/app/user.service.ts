import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.model';
import * as FormData from "form-data"
//https://mherman.org/blog/authentication-in-angular-with-ngrx/

@Injectable()
export class userService {
  private BASE_URL = 'https://localhost:44303/';
   FormData = require('form-data');
  constructor(private http: HttpClient) {}

  getToken(): string|null {
    return localStorage.getItem('token');
  }

  logIn(user:User): Observable<any> {

    const url = `${this.BASE_URL}api/login`;
    let formData: FormData = new FormData();
    formData.append('user', JSON.stringify(user));
    return this.http.post<User>(url,formData);
  }

}