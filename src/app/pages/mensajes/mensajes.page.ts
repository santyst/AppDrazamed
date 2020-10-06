import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  posteo: Observable<any>;
  postUrl = `user/contact-us`;
  code: any;
  code2: any;
  base_url: any;

  dataToSend = {
    name: '',
    phone: '',
    msg: '',
    email: '',
  };
  constructor(
    private menuCtrl: MenuController,
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private alertCtrl: AlertController,
    private loadingController: LoadingController,
    private config: ConfigService
  ) {
    this.base_url = config.get_base_url();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  @ViewChild('mySlider') slider: IonSlides;
  sliderOpts = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  cartItemCount: BehaviorSubject<number>;

  mensajesForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    mensaje: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }

  async postData() {
    console.log('Datos enviados: ');
    console.log(this.dataToSend);
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.http.post(`${this.postUrl}`, this.dataToSend
      , { headers: new HttpHeaders({ "Content-Type": "application/json" }) })
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(async (mensaje) => {
        this.code = mensaje;
        this.code2 = this.code.status;
        console.log(this.code2);
        if (this.code2 === 'SUCCESS'){
         const alert = await this.alertCtrl.create({
        message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">El mensaje fue enviado',
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
         this.mensajesForm.reset();
        }
       else {
        const alert = await this.alertCtrl.create({
          message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">El mensaje no fue enviado',
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
