import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TratamientosService } from 'src/app/services/tratamientos.service';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-createalarm2',
  templateUrl: './createalarm2.page.html',
  styleUrls: ['./createalarm2.page.scss'],
})
export class Createalarm2Page implements OnInit {
  currentnot: any = 0;
  currentnot1: any = 0;
  currentnot3: any = 0;
  items: any = 0;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  base_url: any = 0;
  alarmas: any = 0;
  intervaloNumber: number = 0;
  key2 = 'alarma';
  user1: any = 0;
  userid: any = 0;
  aleatory: any = 0;
  tomadas: any = 0;
  not: any = 0;
  intervalo1: any = 0;
  nottrigger: any = 0;
  loop: any = 0;
  fecha: any = 0;
  hora: any = 0;

  constructor(private router: Router, private route: ActivatedRoute, private config: ConfigService,
              private localNotifications: LocalNotifications, private loadingController: LoadingController,
              private alertCtrl: AlertController, private formBuilder: FormBuilder, private storage: Storage,
              private tratamientoService: TratamientosService, private htpp: HttpClient, private auth: AuthService,
              private http: HttpClient, private plt: Platform) {
    this.base_url = config.get_base_url();
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    this.alarmasForm = this.formBuilder.group({
      obs: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      freq: new FormControl('', [Validators.required]),
    }); 
  }
  

  intervalo = [{ id: 4, name: '4 Horas' }, { id: 8, name: '8 Horas' }, { id: 12, name: '12 Horas' }, { id: 16, name: '16 Horas' },
  { id: 24, name: '24 Horas' }, { id: 48, name: '48 Horas' }, { id: 72, name: '72 Horas' }];


  dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

  alarmasForm: FormGroup;

  interval;

  timeLeft = this.intervaloNumber;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.items = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.items);
      }
    });
    this.fecha = moment().format('YYYY-MM-DD');
    this.hora = moment().format('LTS');

    this.alarmas = {
      email: this.userid,
      freq: this.intervaloNumber,
      date: moment(this.fecha).format('YYYY-MM-DD'),
      time: moment(this.hora).format('LTS'),
      obs: this.items.item_name,
      item_name: this.items.item_name,
      composition: this.items.composition,
      dosis: 1,
      total: this.items.units_value,
      units: this.items.units,
      item_code: this.items.item_code,
    };
    console.log('json inicial');
    console.log(this.alarmas);
    this.alarmasForm.reset();

  }
  
  goBack() {
    this.router.navigate(['createalarm']);
  }
  doSomething(fecha) {
    moment(fecha).format('YYYY-MM-DD');
  }
  doSomethingh(hora) {
    moment(hora).format('LTS');
  }
  async load() {
    let loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots',
      duration: 50
    });
    await loading.present();
  }
  async updateAlarm() {
    this.aleatory = Math.floor(Math.random() * 10) + 1;
    let date = new Date(this.alarmas.date + ' ' + this.alarmas.time);
    console.log(date);
    this.load();
    let alert = await this.alertCtrl.create({
      message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">La alarma fue creada.',
      mode: 'ios',
      cssClass: 'failed',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'btnalert',
        }
      ]
    });
    await alert.present();
    // this.storage.set(this.key2, this.alarmas);
    
    /*this.localNotifications.on('yes').subscribe(val => {
      this.tomadas = {
        email: this.userid,
        item_code: this.alarmas.item_code,
        taken: 1
      };
      this.http.post(`${this.base_url}treatment/update-treatment`, this.tomadas).subscribe(value => {
       console.log(value);
      });
    });*/
    this.check(this.alarmas.item_code);
    this.alarmas.tomadas = 0;
    this.tratamientoService.addAlarm(this.alarmas);
    console.log(this.alarmas);
    this.router.navigate(['mipastillero']);
  }
  check(id){
    this.loop = this.alarmas.freq * 60000;
    let pastillas = 0;
    pastillas = this.alarmas.total
    let i = 1;
    let horas_totales = 0;
    horas_totales = this.alarmas.freq * pastillas;
    let dateObjetive = 0;
    dateObjetive = new Date(`${this.alarmas.date}T${this.alarmas.time}`).getTime();
    let dateObjetive2 = new Date(`${this.alarmas.date}T${this.alarmas.time}`);
    let nowstart = new Date();
    let nowstart2 = moment(nowstart);
    let dateObjetive3 = moment(dateObjetive2);
    let endDate = moment(dateObjetive2).add(horas_totales, 'hours').format();
    let proxima = moment(endDate).subtract(48, 'hours').format('YYYY-MM-DD');
    console.log('Fecha final' + ' ' + endDate);
    console.log('Proxima entrega' + ' ' + proxima);
    // console.log((date2));
    let dif = dateObjetive3.diff(nowstart2, 'minutes');
    let hora = moment(nowstart).add(dif, 'minutes').add(1, 'minute').format('LT');
    //document.getElementById('hora').innerHTML = 'a las ' + hora;
    this.alarmas.prox = hora;
    this.alarmas.proxima_entrega = proxima;
    this.tratamientoService.addAlarm(this.alarmas);
    this.intervalo1 = window.setInterval(() => {
      let now = new Date().getTime();
      let now1 = moment(now).format();
      // console.log(now1);
      let timeleft = 0;
      timeleft = dateObjetive - now;
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

      //document.getElementById('days').innerHTML = days + 'd '
      //document.getElementById('hours').innerHTML = hours + 'h '
      // document.getElementById('mins').innerHTML = minutes + 'm '
      this.alarmas.timeH = hours;
      this.alarmas.timeM = minutes;
      this.alarmas.timeD = days;
      this.alarmas.toma = 'T0';
      this.tratamientoService.addAlarm(this.alarmas);
              // Display the message when countdown is over
      if (timeleft < 0) {
                  window.clearInterval(this.intervalo1);
                  this.alarmas.timeH = '';
                  this.alarmas.timeM = '';
                  this.alarmas.timeD = '';
                  this.alarmas.toma = 'T0';
                  this.tratamientoService.addAlarm(this.alarmas);
                  //document.getElementById('days').innerHTML = ''
                  //document.getElementById('hours').innerHTML = '' 
                  // document.getElementById('mins').innerHTML = ''
                  //document.getElementById('hora').innerHTML = ''
                 // //document.getElementById('end').innerHTML = 'TIME UP!!';
              }
      let verify = (moment(dateObjetive).isSame(now1));
      if (verify === true){
        window.clearInterval(this.intervalo1);
        // console.log('notificacion 1' + ' ' + this.alarmas.item_name );
        this.localNotifications.schedule({
          id: id,
          title: this.items.item_name,
          text: 'Hora de un medicamento.',
          foreground: true,
          lockscreen: true,
          wakeup: true,
          priority: 2,
          silent: false
        });
        this.currentnot1 = this.localNotifications.on('click').subscribe(async val => {
          console.log(val);
          let alert = await this.alertCtrl.create({
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Tomar',
                cssClass: 'btnalert',
                handler: data => {
                  console.log('alarmas');
                  console.log(this.alarmas);
                 this.alarmas.toma = 'T1';
                 this.tratamientoService.addAlarm(this.alarmas);
                 this.currentnot1.unsubscribe();
                }
              },
              {
                text: 'Posponer',
                cssClass: 'btnalert',
                handler: datos => {
                  this.currentnot1.unsubscribe();
                  this.postpone(val.id, this.alarmas);
                }
              }
            ]
          });
          await alert.present();
        });
        this.countdown();
         }
      }, 1000);
        let intervaloGrande = window.setInterval(() => {
            i++;
            // console.log('notificacion' + i + ' ' + this.alarmas.item_name );
            this.localNotifications.schedule({
              id: id,
              title: this.items.item_name,
              text: 'Hora de un medicamento.',
              foreground: true,
              lockscreen: true,
              wakeup: true,
              priority: 2,
              silent: false,
            });
            this.currentnot = this.localNotifications.on('click').subscribe(async val => {
              console.log(val);
              let alert = await this.alertCtrl.create({
                mode: 'ios',
                cssClass: 'failed',
                backdropDismiss: false,
                buttons: [
                  {
                    text: 'Tomar',
                    cssClass: 'btnalert',
                    handler: data => {
                      console.log('alarmas');
                      console.log(this.alarmas);
                     this.alarmas.toma = 'T1';
                     this.tratamientoService.addAlarm(this.alarmas);
                     this.currentnot.unsubscribe();
                    }
                  },
                  {
                    text: 'Posponer',
                    cssClass: 'btnalert',
                    handler: datos => {
                      this.currentnot.unsubscribe();
                      this.postpone(val.id, this.alarmas);
                    }
                  }
                ]
              });
              await alert.present();
            });
            if(i < pastillas){
              this.countdown();
            }
            if(i === pastillas){
            window.clearInterval(intervaloGrande);
           }
          }, this.loop);
       

  }
  countdown(){
     let now = new Date();
     let now2 = moment(now).format();
     let objectiveDate = moment(now2).add(this.alarmas.freq, 'minutes').format('LT');
     let objectiveDate2 = moment(now2).add(this.alarmas.freq, 'minutes').format();
     let objectiveDate3 = new Date(objectiveDate2).getTime();
    // console.log((date2));
     //document.getElementById('hora').innerHTML = 'a las ' + objectiveDate;
     this.alarmas.prox = objectiveDate;
     this.tratamientoService.addAlarm(this.alarmas);
     let intervalo1 = window.setInterval(() => {
      let date1 = new Date().getTime();
      let date1_1 = moment(date1).format();
      // console.log(date1_1);
      let timeleft = objectiveDate3 - date1;
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.alarmas.timeH = hours;
      this.alarmas.timeM = minutes;
      this.alarmas.timeD = days;
      this.alarmas.toma = 'T0';
      this.tratamientoService.addAlarm(this.alarmas);
     // document.getElementById('days').innerHTML = days + 'd '
      //document.getElementById('hours').innerHTML = hours + 'h '
      /// document.getElementById('mins').innerHTML = minutes + 'm '
     
              // Display the message when countdown is over
      if (timeleft < 0) {
                  window.clearInterval(intervalo1);
                  this.alarmas.timeH = '';
                  this.alarmas.timeM = '';
                  this.alarmas.timeD = '';
                  this.alarmas.toma = 'T0';
                  this.tratamientoService.addAlarm(this.alarmas);
                 // document.getElementById('days').innerHTML = ''
                  //document.getElementById('hours').innerHTML = '' 
                 // document.getElementById('mins').innerHTML = ''
                 // document.getElementById('hora').innerHTML = ''
                 // document.getElementById('end').innerHTML = 'TIME UP!!';
      }
    }, 1000);
  }
  postpone(id, alarma){
    let int4 = window.setInterval(() => {
      this.localNotifications.schedule({
        id: id,
        title: this.items.item_name,
        text: 'Hora de un medicamento.',
        foreground: true,
        lockscreen: true,
        wakeup: true,
        priority: 2,
        silent: false
      });
      this.currentnot3 = this.localNotifications.on('click').subscribe(async val => {
        console.log(val);
        let alert = await this.alertCtrl.create({
          mode: 'ios',
          cssClass: 'failed',
          backdropDismiss: false,
          buttons: [
            {
              text: 'Tomar',
              cssClass: 'btnalert',
              handler: data => {
                console.log('alarmas');
                console.log(alarma);
               this.alarmas.toma = 'T1';
               this.tratamientoService.addAlarm(alarma);
               this.currentnot3.unsubscribe();
               window.clearInterval(int4);
              }
            },
            {
              text: 'Posponer',
              cssClass: 'btnalert',
              handler: datos => {
                this.currentnot3.unsubscribe();
               this.postpone(id, alarma);
               
              }
            }
          ]
        });
        await alert.present();
      });
    },60000);
  }

}
