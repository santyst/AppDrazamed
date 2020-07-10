import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private auth: AuthService,
    private menuCtrl: MenuController
  ) {}

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

   goAcerca(){
    console.log("button clicked");
    this.router.navigate(['acercade']);
   }

   goOut(){
    console.log("button clicked");
    this.auth.logout();
   }

    ionViewWillEnter() {
 this.menuCtrl.enable(false);
}


}
