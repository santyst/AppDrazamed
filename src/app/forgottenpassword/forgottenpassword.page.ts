import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-forgottenpassword',
  templateUrl: './forgottenpassword.page.html',
  styleUrls: ['./forgottenpassword.page.scss'],
})
export class ForgottenpasswordPage implements OnInit {

  constructor(
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
