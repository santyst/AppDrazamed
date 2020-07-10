import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';





@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  constructor(
    private router: Router,
    public http: HttpClient,
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private platform: Platform,
    private auth: AuthService

  ) {}


public items2: any;

  credentials = {
   email: '',
   password: ''
  };

  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/home');
      } else {
        const alert = await this.alertController.create({
          header: 'Login Failed',
          message: 'Usuario o contraseña incorrectos',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }

  ngOnInit() {
  }

  logForm(form) {
    console.log(form.value)
  }

  ionViewWillEnter() {
 this.menuCtrl.enable(false);
}


}


