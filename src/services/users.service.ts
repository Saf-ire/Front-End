import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly mainURL =`/${environment.apiURL} `;
  private signUp = '/api/signup/'

  constructor(private http: HttpClient) { }
  postUser(user : any){
   return this.http.post(this.mainURL + this.signUp, user);
  }


}