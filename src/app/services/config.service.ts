import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public base_url: string;


  constructor() { 
    this.base_url = 'https://dev.drazamed.com/';
  }


  get_base_url() {
    return this.base_url;
  }
}
