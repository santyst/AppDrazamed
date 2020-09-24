import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mispedidos',
  templateUrl: './mispedidos.page.html',
  styleUrls: ['./mispedidos.page.scss'],
})
export class MispedidosPage implements OnInit {
isYesClicked = false;
isNoClicked = false;
  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }
goBack(){
  this.router.navigate(['perfil']);
}

ionViewWillEnter() {
  this.menuCtrl.enable(false);
 }
 goOpen(){
  this.router.navigate(['request-open']);
 }
 goClosed(){
  this.router.navigate(['request-closed']);
 }
}
