import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
  }),
};

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  private readonly mainURL = `${environment.apiURL}`;
  private readonly localURL = `${environment.localURL}`;
  email = '';
  password = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private cookie: CookieService
  ) {}

  login() {
    this.authService.logUser(this.email, this.password);
  }

  setCookie() {
    return this.http
      .get(this.localURL + 'cookies/set-cookie', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  checkCookie() {
    return this.http
      .get(this.localURL + 'cookies/check-cookie', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  clearCookie() {
    return this.http
      .get(this.localURL + 'cookies/clear-cookie', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  getLocalCookie() {
    const cookies = this.cookie.getAll();
    if (cookies) {
      return console.log({
        message: 'Cookies found',
        cookies: cookies,
      });
    }

    return console.log('No cookies found');
  }

  ngOnInit(): void {}
}
