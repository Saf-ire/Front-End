import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authe/auth.service';
import { Doctor } from 'src/app/interfaces/doctor.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
  styleUrls: ['./psychologist-profile.component.css'],
})
export class PsychologistProfileComponent implements OnInit {
  public user: Doctor | any;
  private readonly mainURL = `${environment.apiURL}`;
  private readonly localURL = `${environment.localURL}`;

  constructor(private auth: AuthService, private http: HttpClient) {}

  session() {}

  ngOnInit(): void {
    this.http
      .get(this.localURL + 'api/login', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
        this.user = res.user;
      });
  }

  showUser() {
    console.log({ user: this.user });
    this.http.get(this.localURL + 'api/login').subscribe((resp: any) => {
      console.log({ message: 'ngOnInit', response: resp });
    });
  }

  getCookies() {
    this.http.get(this.localURL + 'cookies/').subscribe((resp: any) => {
      console.log({ message: 'Cookies', response: resp });
    });
  }
}
