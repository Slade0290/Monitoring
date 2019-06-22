import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserPHPService } from '../services/user-php.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private auth: AuthService, 
            private router: Router){

}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): 
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  		console.log("Guard: canActivate")
      this.auth.getLogin()
      return this.auth.isLoggedIn;
      // if(this.auth.isLoggedIn){
      //   return true;
      // }
      // console.log("canActivate:", false);
      // this.router.navigate(['']);
      // return false;
  }

}
