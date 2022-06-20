import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _registerUser: UsersService) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    })
  }



  ngOnInit(): void {
  }

}
