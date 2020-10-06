import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, AlertController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


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

  cartItemCount: BehaviorSubject<number>;
  posteo: Observable<any>;
  comentarios: any;
  postUrl = `https://dev.drazamed.com/user/contact-us`;
  user: any;
  usuario: any;
  email: any;
  nombre: any;
  datatoSend: any;
  constructor(
    private menuCtrl: MenuController,
    private cartService: CartService,
    private auth: AuthService,
    public alertCtrl: AlertController,
    private http: HttpClient,
    private router: Router
  ) {
    this.cartItemCount = this.cartService.getCartItemCount();
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
          handler: (data) => {
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
            this.http.post(`${this.postUrl}`, this.datatoSend).subscribe((val) => {
              console.log(val);
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
  processTreat() {
    this.router.navigate(['processtreatment']);
  }
  createAlarm() {
    this.router.navigate(['createalarm']);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }
}
