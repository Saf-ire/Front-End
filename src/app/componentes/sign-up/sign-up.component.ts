import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerUser: any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _registerUser: UsersService) {
    this.form = this.fb.group({
      name: ['',],
      last_name: [''],
      email: [''],
      password: ['']
    })
  }

  addUser() {
    const user: any = {
      name: this.form.get('name')?.value,
      last_name: this.form.get('last_name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this._registerUser.postUser(user).subscribe(data => {
      this.form.reset();
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
