import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  checkLogIn() {
    if (localStorage.getItem('auth_token') != null) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('auth_token');
  }
}
