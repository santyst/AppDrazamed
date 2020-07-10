import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  goCreateAccount2(){
    console.log("button clicked");
    this.router.navigate(['createaccount2']);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
