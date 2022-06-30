import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import {AuthService} from '../services/authe/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpedientGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      if (this.auth.logIn) {
        resolve(true)
      } else {
        this.router.navigate(['profile'])
        resolve(false)
      }
    })
  }
  
}
