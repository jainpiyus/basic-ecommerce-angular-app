import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../interfaces/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements  CanActivate {
  user:User;
  constructor(public loginService: LoginService, public router: Router) {}
  canActivate(): boolean {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
    if (this.user) {
      return true;
    }
   this.router.navigate(['home']);
   return false; 
  }
}
