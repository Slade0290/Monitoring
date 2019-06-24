import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../../../../models/user.model.js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private auth: AuthService, 
            private router: Router){

}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): 
  Observable<boolean>|boolean{
  		console.log("Guard: canActivate")
      this.auth.getLogin()
      return true; 
      
      // return new Promise((resolve) => {
      //   this.auth.getLogin()
      //     .then((user: User) => {
      //       console.log('home auth', user)
      //       this.router.navigate(['/dashboard']);
      //       resolve(false);
      //     })
      //     .catch(err => {
      //       resolve(true);
      //     });
      //   })

      // this.auth.getLogin()
      // return this.auth.loggedInStatus

      // return this.auth.getLogin().then(function() {
      //   return this.auth.
      // })

      // return this.auth.getLogin().then(function(auth) {
      //    return this.auth.isLoggedIn;
      // })

      // if(this.auth.isLoggedIn){
      //   return true;
      // }
      // console.log("canActivate:", false);
      // this.router.navigate(['']);
      // return false;

      // return this.auth.getLogin().map(auth => {
      //       if (auth) {
      //           console.log('authenticated');
      //           return true;
      //       }
      //       console.log('not authenticated');
      //       this.router.navigateByUrl('/authentification');
      //       return false;
      //   }).first(); 

      // .subscribe(
      //   res => {
      //     console.log(res);
      //     this.setLoggedIn(true)
      //     this.user = res
      //   },
      //   err => {
      //     console.log(err);
      //     this.setLoggedIn(false)
      //   })
  }

}
