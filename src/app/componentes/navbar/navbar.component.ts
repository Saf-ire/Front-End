import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(){
   }

  checkLogIn() {
    if (localStorage.getItem('jwt') != null) {
      return true;
    } else {
      return false;
    }
  }



  logOut() {
    localStorage.removeItem('jwt');
  }
}
