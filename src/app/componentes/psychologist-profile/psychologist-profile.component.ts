import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';
import { Doctor } from 'src/app/interfaces/doctor.interface';
@Component({
  selector: 'app-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
  styleUrls: ['./psychologist-profile.component.css']
})

export class PsychologistProfileComponent implements OnInit {
  users: any;

  user:Doctor|any;

  constructor(private auth:AuthService) { }
  
  ngOnInit(): void {
    this.user = this.auth.user
  }
}
