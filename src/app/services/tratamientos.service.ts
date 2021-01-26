import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import * as moment from 'moment';

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
  next_time: any;
  intervalos: any = [];

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
    /*  this.platform.ready().then(() => {
      if(this.auth.usuario){
      this.user1 = this.auth.getusuario();
      this.userid = this.user1.email;
      this.http.get(`${this.base_url}${this.apiUrl}${this.userid}`).subscribe(val => {
        this.items = val;
        for (let item of this.items) {
          let next_date = item.next_time;
          item.next_time = moment(item.next_time).format('LT');
          item.medicines[0].next_time = item.next_time;
          item.medicines[0].next_date = next_date;
          item.medicines[0].dosis = item.dosis;
          item.medicines[0].taken = item.taken;
          item.medicines[0].total = item.total;
          item.medicines[0].buy_time = moment(item.buy_time).format('ll');

          this.items3 = item.medicines
          for (var i = 0; i < this.items3.length; i++) {
            this.items2.push(this.items3[i]);
            this.alarm = this.items2;
          }
        }
        console.log(this.alarm);
      });
    }

    });  */
  }
getTreatmen(){
  this.alarm.splice(0, this.alarm.length);
  this.user1 = this.auth.getusuario();
  this.userid = this.user1.email;
  this.http.get(`${this.base_url}${this.apiUrl}${this.userid}`).subscribe(val => {
    this.items = val;
    for (let item of this.items) {
      let next_date = item.next_time;
      item.next_time = moment(item.next_time).format('LT');
      item.medicines[0].next_time = item.next_time;
      item.medicines[0].next_date = next_date;
      item.medicines[0].dosis = item.dosis;
      item.medicines[0].taken = item.taken;
      item.medicines[0].total = item.total;
      item.medicines[0].buy_time = moment(item.buy_time).format('ll');
      this.items3 = item.medicines
      for (var i = 0; i < this.items3.length; i++) {         
          this.items2.push(this.items3[i]);
          this.alarm = this.items2;
      }
    }
    for(let time of this.alarm){
      // console.log("next_time",time.next_date);
      console.log("ItemCode", time.item_code, "NextTime", time.next_time);
      this.TimeRemaining(time.item_code, time.next_date);
    }
    console.log(this.alarm);
  });
}
  getAlarma() {
    return this.alarm;
  }

  TimeRemaining(item_code, next_time){
    let alarma = {
      timeH: 0,
      timeM: 0,
      timeD: 0,
      item_code: item_code,
      taken: 0
    };
     
    
    

    this.intervalos[item_code] = setInterval(() => {
      console.log("ItemCode:", item_code);
      console.log("NextTime:", next_time.replace(' ', 'T'));
      let dateObjective = new Date(next_time.replace(' ', 'T')).getTime();
      console.log ("DateObjective:", dateObjective);
      // console.log ("DateObjective:", dateObjective);
      let now = new Date().getTime();
      let timeleft = 0;
      
      timeleft = dateObjective - now;
      console.log ("timeLeft:", timeleft);
      
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor(((timeleft % (1000 * 60 * 60)) / (1000 * 60))+1);
      alarma.timeH = hours;
      alarma.timeM = minutes;
      alarma.timeD = days;
      // console.log("Dias:", days, "Minutos:", minutes, "Horas:", hours);
      this.addAlarm(alarma);
      if (timeleft < 0) {
        clearInterval(this.intervalos[item_code]);
        alarma.timeH = 0;
        alarma.timeM = 0;
        alarma.timeD = 0;
        console.log(alarma);
        this.addAlarm(alarma);
       //  this.TimeRemaining(item_code, next_time);
    }
    }, 1000)
  }

  addAlarm(alarma) {
    //console.log(alarma);
    let added = false;
    for (let alar of this.alarm) {
      if(alar.item_code === alarma.item_code){
        if (alarma.taken !== 0) {
          alar.taken += alarma.taken;
          
          break;
        }
      }
    }
    for (let al of this.alarm) {

      if (al.item_code === alarma.item_code) {
        al.timeM = alarma.timeM;
        al.timeH = alarma.timeH;
        al.timeD = alarma.timeD;
        added = true;
      }
    }
    if (!added) {
      this.alarm.push(alarma);
      console.log(this.alarm);
    }

  }

  removeAlarm(alarma) {
    for (let [index, p] of this.alarm.entries()) {
      if (p.item_code === alarma.item_code) {
        clearInterval(this.intervalos[alarma.item_code]);
        this.alarm.splice(index, 1);
        this.user1 = this.auth.getusuario();
        this.userid = this.user1.email;
        this.del = {
      email: this.userid,
      item_code: alarma.item_code
    };
        this.http.post(`${this.base_url}treatment/delete-treatment`, this.del).subscribe((val) => {
          console.log(val);
        });
      }
    }
  }
}
