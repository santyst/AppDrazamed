import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-proxima-entrega',
  templateUrl: './proxima-entrega.page.html',
  styleUrls: ['./proxima-entrega.page.scss'],
})
export class ProximaEntregaPage implements OnInit {

  constructor(private router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  Volver(){
    this.router.navigate(['perfil']);
  }
}
