import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
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
  constructor(private router: Router, private route: ActivatedRoute, private config: ConfigService,
              private localNotifications: LocalNotifications, private loadingController: LoadingController,
              private alertCtrl: AlertController, private formBuilder: FormBuilder, private storage: Storage,
              private tratamientoService: TratamientosService, private htpp: HttpClient, private auth: AuthService,
              private http: HttpClient) {
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
  items: any;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  base_url: any;
  alarmas: any;
  intervaloNumber: number = 0;
  key2 = 'alarma';
  user1: any;
  userid: any;
  aleatory: any;
  tomadas: any;
  not: any;
  nottrigger: any;
  loop: any;
  
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
    this.alarmas = {
      email: this.userid,
      freq: this.intervaloNumber,
      date: this.doSomething,
      time: this.doSomethingh,
      obs: this.items.item_name,
      item_name: this.items.item_name,
      composition: this.items.composition,
      dosis: 1,
      total: this.items.units_value,
      units: this.items.units,
      item_code: this.items.item_code,
    };
    this.alarmasForm.reset();
  }
  goBack() {
    this.router.navigate(['createalarm']);
  }
  doSomething(date) {
    moment(date).format('YYYY-MM-DD');
  }
  doSomethingh(time) {
    moment(time).format('LTS');
  }
  async load() {
    const loading = await this.loadingController.create({
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
    const date = new Date(this.alarmas.date + ' ' + this.alarmas.time);
    console.log(date);
    this.localNotifications.schedule({
      id: 1,
      title: 'Se ha creado tu tratamiento',
      lockscreen: true,
      wakeup: true,
      priority: 2,
      silent: false
    });
    this.load();
    const alert = await this.alertCtrl.create({
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
    this.alarmas.tomadas = 0;
    this.alarmas.conteo = this.check(this.aleatory);
    this.tratamientoService.addAlarm(this.alarmas);
    console.log(this.alarmas);
    this.router.navigate(['mipastillero']);
  }
  check(id = this.aleatory){
    this.loop = this.alarmas.freq * 60000;
    const pastillas = 3;
    let i = 1;
    const dateObjetive = new Date(`${this.alarmas.date}T${this.alarmas.time}`).getTime();
    const dateObjetive2 = new Date(`${this.alarmas.date}T${this.alarmas.time}`);
    const nowstart = new Date();
    const nowstart2 = moment(nowstart);
    const dateObjetive3 = moment(dateObjetive2);

    // console.log((date2));
    const dif = dateObjetive3.diff(nowstart2, 'minutes');
    const hora = moment(nowstart).add(dif, 'minutes').format('LT');
    //document.getElementById('hora').innerHTML = 'a las ' + hora;
    this.alarmas.prox = hora;
    this.tratamientoService.addAlarm(this.alarmas);
    const int1 = setInterval(() => {
      const now = new Date().getTime();
      const now1 = moment(now).format();
      console.log(now1);
      const timeleft = dateObjetive - now;
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      
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
                  clearInterval(int1);
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
      const verify = (moment(dateObjetive).isSame(now1));
      if (verify === true){
        clearInterval(int1);
        // console.log('notificacion 1' + ' ' + this.alarmas.item_name );
        this.localNotifications.schedule({
          id: this.alarmas.item_code,
          title: this.items.item_name,
          text: 'Hora de un medicamento.',
          trigger: {in: 1, unit: ELocalNotificationTriggerUnit.SECOND},
          lockscreen: true,
          wakeup: true,
          priority: 2,
          silent: false,
          actions: [{ id: 'yes', title: 'Tomar' }, { id: 'no', title: 'Posponer' }]
        });
        this.localNotifications.on('click').subscribe(async val => {
          const alert = await this.alertCtrl.create({
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Tomar',
                cssClass: 'btnalert',
                handler: data => {
                 this.alarmas.toma = 'T1';
                 this.tratamientoService.addAlarm(this.alarmas);
                }
              },
              {
                text: 'Posponer',
                cssClass: 'btnalert',
              }
            ]
          });
          await alert.present();
        });
        
        this.countdown();
        const intervaloGrande = setInterval(() => {
            i++;
            // console.log('notificacion' + i + ' ' + this.alarmas.item_name );
            this.localNotifications.schedule({
              id: this.alarmas.item_code,
              title: this.items.item_name,
              text: 'Hora de un medicamento.',
              trigger: {in: 1, unit: ELocalNotificationTriggerUnit.SECOND},
              lockscreen: true,
              wakeup: true,
              priority: 2,
              silent: false,
              actions: [{ id: 'yes', title: 'Tomar' }, { id: 'no', title: 'Posponer' }]
            });
            /*this.localNotifications.on('click').subscribe(async val => {
              const alert = await this.alertCtrl.create({
                mode: 'ios',
                cssClass: 'failed',
                backdropDismiss: false,
                buttons: [
                  {
                    text: 'Tomar',
                    cssClass: 'btnalert',
                    handler: data => {
                      this.alarmas.toma = 'T1';
                      this.tratamientoService.addAlarm(this.alarmas);
                      this.localNotifications.clear(this.alarmas.item_code);
                     }
                  },
                  {
                    text: 'Posponer',
                    cssClass: 'btnalert',
                  }
                ]
              });
              await alert.present();
            });*/
            
            if(i < pastillas){
              this.countdown();
            }
            if(i === pastillas){
            clearInterval(intervaloGrande);
           }
          }, this.loop);
      }
    }, 1000);

  }
  countdown(){
     const now = new Date();
     const now2 = moment(now).format();
     const objectiveDate = moment(now2).add(this.alarmas.freq, 'minutes').format('LT');
     const objectiveDate2 = moment(now2).add(this.alarmas.freq, 'minutes').format();
     const objectiveDate3 = new Date(objectiveDate2).getTime();
    // console.log((date2));
     //document.getElementById('hora').innerHTML = 'a las ' + objectiveDate;
     this.alarmas.prox = objectiveDate;
     this.tratamientoService.addAlarm(this.alarmas);
     const intervalo1 = setInterval(() => {
      const date1 = new Date().getTime();
      const date1_1 = moment(date1).format();
      console.log(date1_1);
      const timeleft = objectiveDate3 - date1;
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
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
                  clearInterval(intervalo1);
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
}
