import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TratamientosService {

  alarm = [];
  alarmas = [];
  key = 'getAlarma';
  apiUrl = `my-treatments?email=`
  base_url: any;
  user1: any;
  userid: any;
  items: any;
  items3: any;
  tratamiento: any;
  del: any;
  items2 = [];

  constructor(private storage: Storage, private platform: Platform, private http: HttpClient, private config: ConfigService,
    private auth: AuthService, private localNotifications: LocalNotifications) {
    this.base_url = config.get_base_url();
    /*this.platform.ready().then(() =>{
      this.storage.get(this.key).then((val) => {
        if(val === null){
          val = [];
          console.log(val);
        }
        else{
          this.alarm = val;
        }
      });
    });*/
    this.platform.ready().then(() => {
      /*this.alarmas = JSON.parse(window.localStorage.getItem(this.key));
      if(this.alarmas === null){
        this.alarmas = [];
        console.log(this.alarmas);
      }
      else{
        this.alarm = this.alarmas;
        console.log(this.alarm);
      }*/
      this.user1 = this.auth.getusuario();
      this.userid = this.user1.email;
      this.http.get(`${this.base_url}${this.apiUrl}${this.userid}`).subscribe(val => {
        this.items = val;
        for (let item of this.items) {
          this.items3 = item.medicines;
          for (var i = 0; i < this.items3.length; i++) {
            this.items2.push(this.items3[i]);
            this.alarm = this.items2;
          }
        }
        console.log(this.alarm);
      });
    });
  }

  getAlarma() {
    return this.alarm;
  }

  getTime(time) {
    return time;
  }
  addTaken(number) {
    number += 1;
    return number;
  }
  addAlarm(alarma) {
    console.log(alarma);
    let added = false;
    for (let alar of this.alarm) {
        if (alarma.toma === 'T1') {
          alar.tomadas += 1;
        }
    }
    for (let al of this.alarm) {

      if (al.item_code === alarma.item_code) {
        al.timeM = alarma.timeM;
        al.timeH = alarma.timeH;
        al.timeD = alarma.timeD;
        al.prox = alarma.prox;
        added = true;
        console.log(this.alarm);
      }
    }
    this.tratamiento = {
      email: alarma.email,
      item_code: alarma.item_code,
      total: alarma.total,
      dosis: alarma.dosis,
      freq: alarma.freq,
      start_time: `${alarma.date}T${alarma.time}:00`,
      obs: `${alarma.obs}, tomar una cada ${alarma.freq} horas`
    };
    if (!added) {
      this.alarm.push(alarma);
      this.user1 = this.auth.getusuario();
      this.userid = this.user1.email;
      console.log(this.alarm);
      this.http.post(`${this.base_url}treatment/create-treatment`, this.tratamiento).subscribe(msj => {
        console.log(msj);
      });
    }

  }

  removeAlarm(alarma) {
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    this.del = {
      email: this.userid,
      item_code: alarma.item_code
    }
    for (let [index, p] of this.alarm.entries()) {
      if (p.item_code === alarma.item_code) {
        this.alarm.splice(index, 1);
        this.http.post(`${this.base_url}treatment/delete-treatment`, this.del).subscribe((val) => {
          console.log(val);
        });
      }
    }
    this.localNotifications.clear(alarma.id_not);
    console.log(this.localNotifications.getAll());
  }
}
