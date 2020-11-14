import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TratamientosService } from 'src/app/services/tratamientos.service';
import { mobiscroll, MbscTimerOptions } from '@mobiscroll/angular';
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
  intervalo = [{ id: 4, name: '4 Horas' }, { id: 8, name: '8 Horas' }, { id: 12, name: '12 Horas' }, { id: 16, name: '16 Horas' },
  { id: 24, name: '24 Horas' }, { id: 48, name: '48 Horas' }, { id: 72, name: '72 Horas' }];


  dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

  alarmasForm: FormGroup;

  interval;

  timerSettings: MbscTimerOptions = {
    display: 'inline',
    targetTime: 10,
    maxWheel: 'minutes',
    minWidth: 100,
    onFinish: () => {
      mobiscroll.alert({
        title: 'Countdown finished',
        message: 'Yup, that\'s right, time\'s up. <br> Restart it by setting a new time.'

      });
    }
  };
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
    moment(time).format('LT');
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
    let date = new Date(this.alarmas.date + ' ' + this.alarmas.time);
    console.log(date);
    this.localNotifications.schedule({
      id: this.aleatory,
      title: this.items.item_name,
      text: 'Hora de un medicamento.',
      trigger: { firstAt: date, in: this.alarmas.freq, unit: ELocalNotificationTriggerUnit.MINUTE },
      lockscreen: true,
      wakeup: true,
      priority: 2,
      silent: false,
      actions: [{ id: 'yes', title: 'Tomar' }, { id: 'no', title: 'Posponer' }]
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
    console.log(this.localNotifications.getAll());
    this.localNotifications.on('yes').subscribe(val => {
      this.tomadas = {
        email: this.userid,
        item_code: this.alarmas.item_code,
        taken: 1
      };
      this.http.post(`${this.base_url}treatment/update-treatment`, this.tomadas).subscribe(value => {
       console.log(value);
      });
    });
    this.alarmas.id_not = this.aleatory;
    this.tratamientoService.addAlarm(this.alarmas);
    console.log(this.alarmas);
    this.router.navigate(['mipastillero']);
    /*this.interval = setInterval(async () => {
      if(this.alarmas.cada > 0) {
        this.alarmas.cada--;
      }else{
        clearInterval(this.interval);
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
      }
  }, 1000);*/
  }

}
