import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  goCreateAccount(){
  this.router.navigate(['createaccount'])
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
