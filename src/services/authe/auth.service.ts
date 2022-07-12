import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Doctor | any;
  private readonly mainURL = `${environment.apiURL}`;
  private time = 0.02;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private cookie: CookieService
  ) {}
  logUser(email: string, password: string) {
    this.http
      .post(this.mainURL + 'api/login', { email: email, password: password })
      .subscribe((resp: any) => {
        console.log(resp);
        this.user = resp.user;
        this.toastr.success(resp.message);
        this.router.navigate(['expedient']);
        localStorage.setItem('jwt', resp.token);
        this.cookie.set('jwt', resp.token, this.time);
      });
  }

  logOut() {
    localStorage.removeItem('jwt');
    this.http.get(this.mainURL + 'api/logout').subscribe((resp: any) => {
      this.toastr.success(resp);
    });
  }

  public get logIn(): boolean {
    // return localStorage.getItem('jwt') !== null;
    if (this.cookie.get('jwt')) return true;

    return false;
  }
}
