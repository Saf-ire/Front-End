import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
  styleUrls: ['./psychologist-profile.component.css'],
})
export class PsychologistProfileComponent implements OnInit {
  public user: Doctor | any;
  private readonly mainURL = `${environment.apiURL}`;

  constructor(private auth: AuthService, private http: HttpClient) {}

  session() {}

  ngOnInit(): void {
    this.http.get(this.mainURL + 'api/login').subscribe((resp: any) => {
      console.log({ message: 'ngOnInit', response: resp });
    });
    if (this.auth.user) {
      this.user = this.auth.user;
    }
  }

  showUser() {
    console.log(this.user);
    this.http.get(this.mainURL + 'api/login').subscribe((resp: any) => {
      console.log({ message: 'ngOnInit', response: resp });
    });
  }
}
