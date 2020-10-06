import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public base_url: string;


  constructor() { 
    this.base_url = "http://dra.devel/";
  }


  get_base_url() {
    return this.base_url;
  }
}
