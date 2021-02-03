import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-avisoprivacidad',
  templateUrl: './avisoprivacidad.page.html',
  styleUrls: ['./avisoprivacidad.page.scss'],
})
export class AvisoprivacidadPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
