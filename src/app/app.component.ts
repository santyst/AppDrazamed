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

  user: any;
  user1: any;
  userid: any;
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
   
    console.log(this.user);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.pushSet();
  }

  pushSet() {
    const pusher = new Pusher('270a27c11d1a38de071b', {
      cluster: 'us2',
    });
    Pusher.logToConsole = true;
    const channel = pusher.subscribe('Drazamed');
    channel.bind('orderStatus', (data) => {
      console.log(data);
      this.user1 = data.user.email;
      this.user = this.auth.getusuario();
      this.userid = this.user.email;
      console.log(this.userid);
      console.log(this.user1);
      if (this.user1 === this.userid) {
        this.localNotifications.schedule({
          text: 'Orden verificada',
          lockscreen: true
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
