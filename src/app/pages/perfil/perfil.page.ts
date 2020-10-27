import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, AlertController, LoadingController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service'
import { finalize } from 'rxjs/operators';
import { TratamientosService } from 'src/app/services/tratamientos.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @ViewChild('mySlider') slider: IonSlides;
  sliderOpts = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  code: any;
  code2: any;
  cartItemCount: BehaviorSubject<number>;
  posteo: Observable<any>;
  comentarios: any;
  postUrl = `user/contact-us`;
  user: any;
  usuario: any;
  email: any;
  nombre: any;
  datatoSend: any;
  base_url: any;
  alarmas = [];
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
alarma: any;
  constructor(
    private menuCtrl: MenuController,
    private cartService: CartService,
    private auth: AuthService,
    public alertCtrl: AlertController,
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private loadingController: LoadingController,
    private tratamientoService: TratamientosService,
    private storage: Storage,
    private platform: Platform
  ) {
    this.base_url = config.get_base_url();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.platform.ready().then(() =>{
      this.alarmas = this.tratamientoService.getAlarma();
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.user = this.auth.getusuario();

    console.log(this.user);
  }


  async addComment() {
    const input = await this.alertCtrl.create({
      header: '¿Cómo va tu tratamiento?',
      cssClass: 'failed',
      mode: 'ios',
      buttons: [
        {
          text: 'Enviar',
          cssClass: 'btnalert',
          handler: async (data) => {
            this.comentarios = data.comentario;
            this.usuario = this.auth.getusuario();
            this.email = this.usuario.email;
            this.nombre = this.usuario.name;
            this.datatoSend = {
              name: this.nombre,
              phone: '',
              msg: this.comentarios,
              email: this.email,
            };
            const loading = await this.loadingController.create({
              cssClass: 'loading',
              message: 'Por favor espera...',
              mode: 'ios',
              spinner: 'dots'
            });
            await loading.present();
            this.http.post(`${this.base_url}${this.postUrl}`, this.datatoSend).
            pipe(
              finalize(() => {
                loading.dismiss();
              })
            )
            .subscribe(async (val) => {
              this.code = val;
              this.code2 = this.code.status;
              if (this.code2 === 'SUCCESS'){
                const alert = await this.alertCtrl.create({
               message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">El comentario fue enviado',
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
        }
      ],
      inputs: [
        {
          name: 'comentario',
          cssClass: 'inputs',
          type: 'textarea',
          placeholder: 'Escribe tu comentario'
        }
      ]
    });

    await input.present();
  }

  goEdit() {
    this.router.navigate(['editprofile']);
  }
  misPedidos() {
    this.router.navigate(['mispedidos']);
  }
  miPastillero() {
    this.router.navigate(['mipastillero']);
  }
  misDirecciones() {
    this.router.navigate(['misdirecciones']);
  }
  processTreat(alarma) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: alarma
      }
    };
    this.router.navigate(['processtreatment'], navigationExtras);
  }
  createAlarm() {
    this.router.navigate(['createalarm']);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }
}
