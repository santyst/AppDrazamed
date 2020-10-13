import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuController, Platform, AlertController, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
credenciales: any;
correo: any;
clave: any;
accept: any;
key = 'user';
key1 = 'remind';
public items3: any;
public items2: any;

credentials = {
  email: '',
  password: ''
 };

  constructor(
    private router: Router,
    public http: HttpClient,
    public menuCtrl: MenuController,
    private alertController: AlertController,
    private platform: Platform,
    private auth: AuthService,
    private storage: Storage,
    private loadingController: LoadingController
  ) {
    this.platform.ready().then(() =>{
      this.get();
    })
  }

  async login() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.auth.login(this.credentials)
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
    .subscribe(async res => {
      if (res) {
        this.router.navigate(['home']);
        if(this.accept === true){
          this.storage.set(this.key, this.credentials);
          this.storage.set(this.key1, this.accept = true);
          console.log('se guardo porque esta en true');
          }
          else{
            console.log('no se guarda');
            this.storage.remove(this.key);
            this.storage.remove(this.key1);
          }
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

  get(){
    this.storage.get(this.key).then(val => {
       this.credenciales = val;
       this.correo = this.credenciales.email;
       this.clave = this.credenciales.password;
       this.credentials.email = this.correo;
       this.credentials.password = this.clave;
    });
    this.storage.get(this.key1).then((val) => {
      this.accept = val;
    });
  }

  ngOnInit() {
  }

  goHome(){
   this.router.navigate(['home']);
  }

  ionViewWillEnter() {
 this.menuCtrl.enable(false);
}



}
