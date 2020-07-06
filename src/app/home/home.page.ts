import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router:Router
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
    this.router.navigate(['login1']);
   }

}
