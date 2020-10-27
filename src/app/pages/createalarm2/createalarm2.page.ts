import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TratamientosService } from 'src/app/services/tratamientos.service';

@Component({
  selector: 'app-createalarm2',
  templateUrl: './createalarm2.page.html',
  styleUrls: ['./createalarm2.page.scss'],
})
export class Createalarm2Page implements OnInit {
  items: any;
  constructor(private router: Router, private route: ActivatedRoute, private config: ConfigService,
              private localNotifications: LocalNotifications, private loadingController: LoadingController,
              private alertCtrl: AlertController, private formBuilder: FormBuilder, private storage: Storage, 
              private tratamientoService: TratamientosService) {
    this.base_url = config.get_base_url();
    
  }
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  base_url: any;
  alarmas: any;
  intervaloNumber: number = 0;
  key2 = 'alarma';
  intervalo = [{ id: 4, name: '4 Horas' }, { id: 8, name: '8 Horas' }, { id: 12, name: '12 Horas' }, { id: 16, name: '16 Horas' },
  { id: 24, name: '24 Horas' }, { id: 48, name: '48 Horas' }, { id: 72, name: '72 Horas' }];


  dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
  alarmasForm = this.formBuilder.group({
    mensaje: ['', [Validators.required]],
    time: ['', [Validators.required]],
    date: ['', [Validators.required]],
    cada: ['', [Validators.required]]
  });
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.items = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.items);

      }
    });
    this.alarmas = {
      cada: this.intervaloNumber,
      date: this.doSomething,
      time: this.doSomethingh,
      mensaje: this.items.item_name,
      item_name: this.items.item_name,
      composition: this.items.composition,
      item_code: this.items.item_code
    };
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
  async updateAlarm() {
    this.tratamientoService.addAlarm(this.alarmas);
    console.log(this.alarmas);
    let date = new Date(this.alarmas.date + ' ' + this.alarmas.time);
    console.log(date);
    this.localNotifications.schedule({
      title: this.alarmas.mensaje,
      text: 'Hora de un medicamento.',
      trigger: { firstAt: date, in: this.alarmas.cada, every: ELocalNotificationTriggerUnit.MINUTE, count: 3 },
      lockscreen: true,
      wakeup: true,
      priority: 2,
      silent: false,
    });
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots',
      duration: 50
    });
    await loading.present();
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
    this.router.navigate(['mipastillero']);
  }

}
