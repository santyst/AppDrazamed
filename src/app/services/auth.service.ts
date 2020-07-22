import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject, from, of, Subscription } from 'rxjs';
import { take, map, switchMap, switchMapTo, subscribeOn } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { strict } from 'assert';
import { stringify } from 'querystring';
import { data } from 'jquery';



const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = `https://drazamed.com/user/user-login/1?`;

  public items: any;
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
  public items2: any;
  public items3: any;
  status: string;

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router,
    private alertController: AlertController) {
      this.loadStoredToken();
     }

loadStoredToken(){
const platformObs = from(this.plt.ready());

this.user = platformObs.pipe(
  switchMap(() => {
    return from(this.storage.get(TOKEN_KEY));
  }),
  map(token => {
   // console.log('token from storage', token);
    if (token){
      const decoded = helper.decodeToken(token);
      // console.log('decoded: ', decoded);
      this.userData.next(decoded);
      return true;
    } else {
      return null;
    }
  })
);
}

login(credentials: {email: string, password: string}){
  let data: Observable <any>;
  data = this.http.get(`${this.apiURL}email=${credentials.email}&password=${credentials.password}`);
  data.subscribe(result => {
    this.items = result;
    this.items2 = this.items [0].result.status;
    console.log(this.items2);
  }, async (err: HttpErrorResponse) => {
    this.items3 = err.status;
    if (this.items3 === 401 || credentials.email === '' || credentials.password === ''){
      console.log('Usuario o contraseña incorrecto');
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  });


  return this.http.get(`${this.apiURL}email=${credentials.email}&password=${credentials.password}`).pipe(
take(1),
map(res => {
return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRyYXphbWVkIiwiaWF0IjoxNTE2MjM5MDIyfQ.4x0iejWjRVH3V7ULcX0-vRmxeR8NLdlFGvx69CuBrrY`;
}),
switchMap(token => {
  if (this.items2 !== 'success'){
    return of(null);
  }
  const decoded = helper.decodeToken(token);
// console.log('login decoded: ', decoded);
  this.userData.next(decoded);
  const storageObs = from(this.storage.set(TOKEN_KEY, token));
  return storageObs;
})
);
}

getUser(){
  return this.userData.getValue();
}

logout(){
  this.storage.remove(TOKEN_KEY).then(() => {
    this.router.navigateByUrl('/login1');
    this.userData.next(null);
  });
}

}
