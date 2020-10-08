import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service'

const URL = 'https://jsonplaceholder.typicode.com/users';
const URL2 = 'user/check-user-name?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public status: any;
 public item: any;
 base_url: any;
  constructor(private http: HttpClient, private config: ConfigService) { 
    this.base_url = config.get_base_url();
  }

  isDisplayNameUnique(val: string): Promise<any> {
    console.log('Going to the server:', val);
    return new Promise(resolve => {
      this.http.get<any>(`${this.base_url}${URL2}u_name=${val}`, {observe: 'response'})
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
