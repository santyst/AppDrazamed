import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { take, map, switchMap, switchMapTo } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { strict } from 'assert';



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

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router) {
      this.loadStoredToken();
     }

loadStoredToken(){
const platformObs = from(this.plt.ready());

this.user = platformObs.pipe(
  switchMap(() =>{
    return from(this.storage.get(TOKEN_KEY))
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

login(credentials: {email: string, password: string}) {
  let data: Observable <any>;
  data = this.http.get(`${this.apiURL}email=${credentials.email}&password=${credentials.password}`);
  data.subscribe(result => {
    this.items = result;
    this.items2 = this.items [0].result.status;
    console.log(this.items2);
  });

  if (this.items2 !== 'success'){
      return of(null);
    }


  return this.http.get(`${this.apiURL}email=${credentials.email}&password=${credentials.password}`).pipe(
take(1),
map(res => {
return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njc2NjU3MDYsImV4cCI6MTU5OTIwMTcwNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiMTIzNDUiLCJmaXJzdF9uYW1lIjoiU2ltb24iLCJsYXN0X25hbWUiOiJHcmltbSIsImVtYWlsIjoic2FpbW9uQGRldmRhY3RpYy5jb20ifQ.4LZTaUxsX2oXpWN6nrSScFXeBNZVEyuPxcOkbbDVZ5U`;
}),
switchMap(token => {
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
