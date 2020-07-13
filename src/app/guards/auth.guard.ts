import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private alertController: AlertController){

  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('in canactivate', user);
        if (!user) {
          this.alertController.create({
            animated: true,
            header: 'Acceso denegado',
            message: 'No tienes acceso a esta pagina',
            buttons: ['OK']
          }).then(alert => alert.present());

          return false;
        } else {
          return true;
        }
      })
    );
  }
}
