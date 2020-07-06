import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

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
    private router: Router
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
    console.log("button clicked");
    this.router.navigate(['home']);
  }

  goPerfil(){
    console.log("button clicked");
    this.router.navigate(['perfil']);
  }

  goMedicamentos(){
    console.log("button clicked");
    this.router.navigate(['medicamentos']);
  }

  goPedidos(){
    console.log("button clicked");
    this.router.navigate(['pedidos']);
  }

  goPastillero(){
    console.log("button clicked");
    this.router.navigate(['pastillero']);
  }

  goDirecciones(){
    console.log("button clicked");
    this.router.navigate(['direcciones']);
  }

  goMensajes(){
    console.log("button clicked");
    this.router.navigate(['mensajes']);
  }

  goAjustes(){
    console.log("button clicked");
    this.router.navigate(['ajustes']);
  }

  goAcercade(){
    console.log("button clicked");
    this.router.navigate(['acercade']);
  }

  goOut(){
    console.log("button clicked");
    this.router.navigate(['login1']);
  }
}
