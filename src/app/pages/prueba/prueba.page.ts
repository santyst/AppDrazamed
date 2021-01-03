import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TratamientosService } from 'src/app/services/tratamientos.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

import { Observable, Subject, timer, interval, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {


  destroy = new Subject();
  showDialog = false;
  timer: number;
  dialog = 'stay logged in?';
  notice = 'session expired';
  showNotice = false;

  rxjsTimer = timer(5000, 1000);
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  intervalo = [{ id: 4, name: '4 Horas' }, { id: 8, name: '8 Horas' }, { id: 12, name: '12 Horas' }, { id: 16, name: '16 Horas' },
  { id: 24, name: '24 Horas' }, { id: 48, name: '48 Horas' }, { id: 72, name: '72 Horas' }];

  dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

  intervaloNumber: number = 0;
  fecha: any = 0;
  hora: any = 0;
  base_url: any;
  user1: any;
  userid: any;
  alarmasForm: any;
  alarmas: any;
  items: any;
  loop: any;
  currentnot: any;
  currentnot1: any;
  currentnot3: any;

  private subscription1: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;
  private subscription4: Subscription;

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

  /*check(id){
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(val => {
      this.timer = val;
      console.log(this.timer);
      if (this.timer === 10) {
        this.showDialog = true;
        console.log(this.dialog);
      }

    if (this.timer >= 20) {
      this.destroy.next();
      this.destroy.complete();
      this.showNotice = true;
      console.log(this.notice);
    }
  })
      
  }*/

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

  async createAlarm() {
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
    this.alarmas.tomadas = 0;
    this.tratamientoService.addAlarm(this.alarmas);
    console.log(this.alarmas);
    this.router.navigate(['mipastillero']);
    this.check(this.alarmas.item_code);
  }

  check(id) {
    this.loop = this.alarmas.freq * 60000;
    let i = 1;
    let pastillas = 0;
    pastillas = this.alarmas.total;
    let dateObjetive = new Date(`${this.alarmas.date}T${this.alarmas.time}`).getTime();
    let horas_totales = 0;
    horas_totales = this.alarmas.freq * pastillas;
    let dateObjetive2 = new Date(`${this.alarmas.date}T${this.alarmas.time}`);
    let nowstart = new Date();
    let nowstart2 = moment(nowstart);
    let dateObjetive3 = moment(dateObjetive2);
    let endDate = moment(dateObjetive2).add(horas_totales, 'hours').format();
    let proxima = moment(endDate).subtract(48, 'hours').format('YYYY-MM-DD');
    console.log('Fecha final' + ' ' + endDate);
    console.log('Proxima entrega' + ' ' + proxima);
    let dif = dateObjetive3.diff(nowstart2, 'minutes');
    let hora = moment(nowstart).add(dif, 'minutes').add(1, 'minute').format('LT');
    this.alarmas.prox = hora;
    this.alarmas.proxima_entrega = proxima;
    this.tratamientoService.addAlarm(this.alarmas);

    this.subscription1 = interval(1000)
      .subscribe(x => {
        let now = new Date().getTime();
        let timeDifference = dateObjetive - now;

        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        this.alarmas.timeH = hours;
        this.alarmas.timeM = minutes;
        this.alarmas.timeD = days;
        this.alarmas.toma = 'T0';
        this.tratamientoService.addAlarm(this.alarmas);

        if (timeDifference < 1000) {
          this.alarmas.timeH = '';
          this.alarmas.timeM = '';
          this.alarmas.timeD = '';
          this.alarmas.toma = 'T0';
          this.tratamientoService.addAlarm(this.alarmas);
          this.subscription1.unsubscribe();
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

          this.countDown();

          this.subscription3 = interval(this.loop).subscribe(y => {
            i++;
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
            if (i < pastillas) {
              this.countDown();
            }
            if (i === pastillas) {
              this.subscription3.unsubscribe();
            }
          });
        }

      });
  }

  countDown() {
    let now = new Date();
    let now2 = moment(now).format();
    let objectiveDate = moment(now2).add(this.alarmas.freq, 'minutes').format('LT');
    let objectiveDate2 = moment(now2).add(this.alarmas.freq, 'minutes').format();
    let objectiveDate3 = new Date(objectiveDate2).getTime();
    this.alarmas.prox = objectiveDate;
    this.tratamientoService.addAlarm(this.alarmas);
    this.subscription2 = interval(1000).subscribe(x => {
      let date1 = new Date().getTime();

      let timeleft = objectiveDate3 - date1;
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      this.alarmas.timeH = hours;
      this.alarmas.timeM = minutes;
      this.alarmas.timeD = days;
      this.alarmas.toma = 'T0';
      this.tratamientoService.addAlarm(this.alarmas);
      if (timeleft < 1000) {
        this.subscription2.unsubscribe();
        this.alarmas.timeH = '';
        this.alarmas.timeM = '';
        this.alarmas.timeD = '';
        this.alarmas.toma = 'T0';
        this.tratamientoService.addAlarm(this.alarmas);
      }
    })
  }

  postpone(id, alarma) {
    this.subscription4 = interval(60000).subscribe(z => {
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
                this.subscription4.unsubscribe();
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
    });
  }
}
