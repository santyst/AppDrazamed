import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
   
public items3: any;
  constructor(
    private router: Router,
    public http: HttpClient,
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private platform: Platform,
    private auth: AuthService

  ) {
  }


public items2: any;

  credentials = {
   email: '',
   password: ''
  };

  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigate(['home']);
      } else {
        const alert = await this.alertController.create({
        header: 'Login Failed',
        message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">Usuario o contraseña incorrectos',
        mode: 'ios',
        cssClass: 'failed',
        buttons: [
          {
            text: 'Aceptar',
            cssClass: 'btnalert',
          }
        ]
        });
        await alert.present();
      }
    });
  }

  ngOnInit() {
  }

  goHome(){
   console.log("button clicked");
   this.router.navigate(['home']);
  }

  ionViewWillEnter() {
 this.menuCtrl.enable(false);
}


}


