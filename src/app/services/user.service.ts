import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const URL = 'https://jsonplaceholder.typicode.com/users';
const URL2 = 'http://dra.devel/user/check-user-name?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public status: any;
 public item: any;
  constructor(private http: HttpClient) { }

  isDisplayNameUnique(val: string): Promise<any> {
    console.log('Going to the server:', val);
    return new Promise(resolve => {
      this.http.get<any>(`${URL2}u_name=${val}`, {observe: 'response'})
        .subscribe(res => {
          console.log('res: ', res.status);
          if(res.status === 200){
            resolve({notUnique: false});
          }
        }, (err: HttpErrorResponse) => {
        this.item = err.status;
        console.log(this.item);
        if (this.item === 409) {
          resolve({ notUnique: true });
        }
      });
    });
  }
}
