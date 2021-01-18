import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

// import { Push, PushOptions, PushObject, PushEvent } from '@ionic-native/push/ngx';

// import { Fire } from '@ionic-native/fcm/ngx';
import { INotificationPayload } from 'cordova-plugin-fcm-with-dependecy-updated';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  public hasPermission: boolean;
  public hasIosPermission: boolean;
  public token: string;
  public apnstoken: string;
  public pushPayload: INotificationPayload;

  user: any;
  user1: any;
  userid: any;
  key = 'token-fcm';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public auth: AuthService,
    private localNotifications: LocalNotifications,
    private backgroundMode: BackgroundMode,
    private fcm: FCM
  ) {
    this.initializeApp();
    
    
  }

  ionViewWillEnter() {
    console.log(this.user);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.backgroundMode.enable();
      // this.getPush();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.localNotifications.hasPermission().then(val => {
        if (val === false){
          this.localNotifications.requestPermission();
        }
        else if (val === true){
          console.log('hay permisos');
        }
      });

      this.setupFCM();

    });

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

  private async setupFCM() {
    await this.platform.ready();
    console.log('FCM setup started');

    if (!this.platform.is('cordova')) {
      return;
    }
    console.log('In cordova platform');

    console.log('Subscribing to token updates');
    this.fcm.onTokenRefresh().subscribe((newToken) => {
      this.token = newToken;
      console.log('onTokenRefresh received event with: ', newToken);
      window.localStorage.setItem('refresh-token', newToken);
    
    });

    console.log('Subscribing to new notifications');
    this.fcm.onNotification().subscribe((payload) => {
      this.pushPayload = payload;
      console.log('onNotification received event with: ', payload);
      alert(payload);
    });

    this.hasPermission = await this.fcm.requestPushPermission();
    console.log('requestPushPermission result: ', this.hasPermission);

    this.hasIosPermission = await this.fcm.hasPermission();
    console.log('requestIosPushPermission result: ', this.hasIosPermission);


    this.token = await this.fcm.getToken();
    window.localStorage.setItem(this.key, this.token);
    console.log('getToken result: ', this.token);


    this.apnstoken = await this.fcm.getAPNSToken();
    console.log('getAPNSToken result: ', this.apnstoken);
    window.localStorage.setItem('apnsToken', this.apnstoken);

    this.pushPayload = await this.fcm.getInitialPushPayload();
    console.log('getInitialPushPayload result: ', this.pushPayload);
  }

  public get pushPayloadString() {
    return JSON.stringify(this.pushPayload, null, 4);
  }

  // getPush() {
  //   this.push.hasPermission().then((res) => {
  //     if (res.isEnabled) {
  //       console.log('Si hay permisos para notificaciones push');
  //     } else {
  //       console.log('No hay permisos para notificaciones push');
  //     }
  //   });

  //   const options: PushOptions = {
  //     android: {
  //       senderID: '193162804196',
  //       forceShow: true
  //     },
  //     ios: {
  //       // senderID: 'SENDER_ID',//si no lo pones, se generará un token para APNS
  //       alert: 'true',
  //       badge: true,
  //       sound: 'false'
  //     },
  //     windows: {}
  //   };

  //   const pushObject: PushObject = this.push.init(options);
  //   pushObject.on('notification').subscribe((notification: any) => {
  //     //aquí recibimos las notificaciones de firebase
  //     console.log(notification);
  //     alert(notification);
  //   });
  //   pushObject.on('registration').subscribe((registration: any) => {
  //     const registrationId = registration.registrationId;
  //     console.log("registration",registrationId);
  //     //registrationId lo debes guardar en mysql o similar para reutilizar
  //   });
  //   pushObject.on('error').subscribe(error => {
  //     console.error('Error with Push plugin', error)
  //   });
  // }

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
