import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pastillero',
  templateUrl: './pastillero.page.html',
  styleUrls: ['./pastillero.page.scss'],
})
export class PastilleroPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }

}
