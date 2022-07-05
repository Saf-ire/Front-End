import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mainURL = `${environment.apiURL}`;

  constructor(private http: HttpClient, private router: Router) { }
  logUser(email: string, password: string) {
    this.http.post(this.mainURL + 'api/login', { email: email, password: password }).subscribe((resp: any) => {

      this.router.navigate(['expedient']);
      localStorage.setItem('auth_token', resp.token);
    })
  }

  logOut() {
    localStorage.removeItem('auth_token');
  }
 
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
