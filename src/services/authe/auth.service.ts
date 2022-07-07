import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Doctor|any;
  private readonly mainURL = `${environment.apiURL}`;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  logUser(email: string, password: string) {
    this.http.post(this.mainURL + 'api/login', { email: email, password: password }).subscribe((resp: any) => {
      console.log(resp.user);
      this.user = resp.user;
      this.router.navigate(['profile']);
      localStorage.setItem('jwt', resp.token);
    })
  }

  logOut() {
    localStorage.removeItem('jwt');
  }
 
  public get logIn(): boolean {
    return (localStorage.getItem('jwt') !== null);
  }

}
