import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
  styleUrls: ['./psychologist-profile.component.css']
})


export class PsychologistProfileComponent implements OnInit {
  users: any;

  constructor(public userService: UsersService, private actRoute: ActivatedRoute) {

   }
   
  ngOnInit(): void {
    this.userService.getUserById().subscribe(response => {
      this.users = response.data
      })
  }
}
