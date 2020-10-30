import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TratamientosService {

  alarm = [];
  alarmas = [];
  key = 'getAlarma';
  constructor(private storage: Storage, private platform: Platform) {

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
     this.alarmas = JSON.parse(window.localStorage.getItem(this.key));
     if(this.alarmas === null){
       this.alarmas = [];
       console.log(this.alarmas);
     }
     else{
       this.alarm = this.alarmas;
       console.log(this.alarm);
     }
    });
  }

  getAlarma(){
      return this.alarm;
  }


  addAlarm(alarma){
    const added = false;
    if (!added){
      this.alarm.push(alarma);
    }
    window.localStorage.setItem(this.key, JSON.stringify(this.alarm));
  }

  removeAlarm(){
        this.storage.remove(this.key);
  }
}
