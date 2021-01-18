import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {    
    return this.authService.user.pipe(
      take(1), // Otherwise the Observable doesn't complete!
      map(user => {
        console.log('Found previous token, automatic login');
        if (user) {
          // Directly open inside area       
          this.router.navigate(['home']);
        } else {          
          // Simply allow access to the login
          return true;
        }
      })
    );
  }
  
}
