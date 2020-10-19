import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  public user: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public auth: AuthService,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }

  ionViewWillEnter() {
    this.user = this.auth.getusuario();
    console.log(this.user);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
     this.pushSet();
  }

  pushSet(){
    const pusher = new Pusher('270a27c11d1a38de071b', {
      cluster: 'us2',
    });
    Pusher.logToConsole = true;
    const channel = pusher.subscribe('Drazamed');
    channel.bind('orderStatus', (data) => {
      if (data) {
        this.localNotifications.schedule({
          text: data,
          lockscreen: true,
          wakeup: true

        });
      }
    });
  }


  goHome() {
    this.router.navigate(['home']);
  }

  goPerfil() {
    this.router.navigate(['perfil']);
  }

  goMedicamentos() {
    this.router.navigate(['medicamentos']);
  }

  goMensajes() {
    this.router.navigate(['mensajes']);
  }

  goPastillero() {
    this.router.navigate(['mipastillero']);
  }

  goAcercade() {
    this.router.navigate(['acercade']);
  }


  goOut() {
    this.auth.logout();
  }
}
