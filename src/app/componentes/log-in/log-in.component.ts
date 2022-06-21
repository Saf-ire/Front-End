import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/authe/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email='';
  password='';

  constructor(private authService: AuthService) {}
  
  login(){
    console.log("You are logged in")
    this.authService.logUser(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
