import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mainURL = `${environment.apiURL}`;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  logUser(email: string, password: string) {
    this.http.post(this.mainURL + 'api/login', { email: email, password: password }).subscribe((resp: any) => {

      this.router.navigate(['expedient']);
      localStorage.setItem('auth_token', resp.token);
      this.toastr.success("You are logged in")
    })
  }

  logOut() {
    localStorage.removeItem('auth_token');
  }
 
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
