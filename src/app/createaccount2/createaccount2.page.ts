import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-createaccount2',
  templateUrl: './createaccount2.page.html',
  styleUrls: ['./createaccount2.page.scss'],
})
export class Createaccount2Page implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
}
