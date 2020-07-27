import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome(){
    this.router.navigate(['home']);
  }

  goPerfil(){
    this.router.navigate(['perfil']);
  }

  goMedicamentos(){
    this.router.navigate(['medicamentos']);
  }

  goMensajes(){
    this.router.navigate(['mensajes']);
  }

  goAjustes(){
    this.router.navigate(['ajustes']);
  }

  goAcercade(){
    this.router.navigate(['acercade']);
  }

  goOut(){
    this.auth.logout();
  }
}
