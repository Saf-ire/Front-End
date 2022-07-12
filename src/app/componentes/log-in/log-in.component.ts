import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private cookie: CookieService
  ) {}

  login() {
    this.authService.logUser(this.email, this.password);
  }

  setCookie() {
    this.cookie.set('userId', 'adminUser');
  }

  ngOnInit(): void {}
}
