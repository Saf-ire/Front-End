import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserAuthenticated = true;
  
  constructor() { }
  
  ngOnInit(): void { }

  public authenticate() {
    this.isUserAuthenticated = false;
    return  this.isUserAuthenticated;
  }
  public deauthenticate() {
    this.isUserAuthenticated = true;
    return  this.isUserAuthenticated;
  }

}
