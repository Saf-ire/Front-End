import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getListUsers() {
    this.http.get('https://ekmind-api.herokuapp.com/test').subscribe(data => {
      console.log(data);
    });
    console.log("ESto es un calis");
  }

}