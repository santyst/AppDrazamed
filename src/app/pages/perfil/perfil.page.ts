import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
import * as moment from 'moment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit, OnDestroy {

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
  alar = [];
  base_url: any;
  alarmas = [];
  items: any;
  items2 = [];
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  proxima = [];
  prox: any;
  alarma: any;
  user1: any;
  userid: any;
  apiUrl = `my-treatments?email=`;
  items3: any;
  intervalos: any = [];
  alarm = [];
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

    this.alarmas = this.tratamientoService.getAlarma();
      console.log(this.alarmas)
  }

  ngOnInit() {
    console.log('on init')
   // this.alarmas = this.tratamientoService.getAlarma()
    this.user = this.auth.getusuario();
    this.userid = this.user.email;
    console.log(this.user);
   //this.getTreatments();
this.alarmas = this.tratamientoService.getAlarma();
    // console.log(this.alarmas)

    /*  for(let al of this.alarmas){
      this.proxima.push(al.buy_time);
      console.log(this.proxima);
     this.prox = (this.proxima[0]);
      // this.tratamientoService.TimeRemaining(al.item_code, al.next_date);
    } */
  }

  ionViewWillEnter() {
  this.alarmas = this.tratamientoService.getAlarma();
   //  this.getTreatments();
  } 
  ngOnDestroy(){

  }
/* getTreatments(){
  //this.alarmas.splice(0, this.alarmas.length);
  this.alarm.splice(0, this.alarm.length);
  this.proxima.splice(0, this.proxima.length);
  this.menuCtrl.enable(true);
  this.user = this.auth.getusuario();
  console.log(this.user);
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    this.http.get(`${this.base_url}${this.apiUrl}${this.userid}`).subscribe(val => {
      this.items = val;
      for (let item of this.items) {
        let next_date = item.next_time;
        item.next_time = moment(item.next_time).format('LT');
        item.medicines[0].next_time = item.next_time;
        item.medicines[0].next_date = next_date;
        item.medicines[0].dosis = item.dosis;
        item.medicines[0].taken = item.taken;
        item.medicines[0].total = item.total;
        item.medicines[0].buy_time = moment(item.buy_time).format('ll');

        this.items3 = item.medicines
        for (var i = 0; i < this.items3.length; i++) {
          this.items2.push(this.items3[i]);
          this.alarm = this.items2;
        }
      }
      for (let ala of this.alarm) {
        // this.alar.push(ala);
        console.log(ala);
        
        this.tratamientoService.addAlarm(ala);
        
      }
       this.alarmas = this.tratamientoService.getAlarma();
      for (let al of this.alarmas) {
        this.proxima.push(al.buy_time);
        console.log(this.proxima);
        this.prox = (this.proxima[0]);
        this.tratamientoService.TimeRemaining(al.item_code, al.next_date);
      } 
     // console.log(this.alarmas);

    });
} */
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
                if (this.code2 === 'SUCCESS') {
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
  async removetreatment(alarma) {
    const alert = await this.alertCtrl.create({
      message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">¿Deseas eliminar el tratamiento?',
      mode: 'ios',
      cssClass: 'failed',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Si',
          cssClass: 'btnalert',
          handler: data => {
            this.tratamientoService.removeAlarm(alarma);
          }
        },
        {
          text: 'No',
          cssClass: 'btnalert',
        }
      ]
    });
    await alert.present();
  }
  processTreat(alarma) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: alarma
      }
    };
    this.router.navigate(['processtreatment'], navigationExtras);
  }
  editAlarm(alarmas) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: alarmas
      }
    };
    this.router.navigate(['edit-alarm'], navigationExtras);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }
}
