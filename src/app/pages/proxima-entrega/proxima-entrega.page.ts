import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-proxima-entrega',
  templateUrl: './proxima-entrega.page.html',
  styleUrls: ['./proxima-entrega.page.scss'],
})
export class ProximaEntregaPage implements OnInit {

  tratamientos = [];
  pedidoArr = [];
  smallerDate: any;
  conditionSmaller:any;
  base_url: any;
  subtotal: any;
  apiImg = `images/products/`;
  apiUrl8 = `.jpg`;
  orden: any;
  user1: any;
  userid: any;
  cantidad = [];
  item_code = [];
  formula = [];
  code: any;
  code2: any;


  constructor(private router: Router, public menuCtrl: MenuController, private route: ActivatedRoute, 
              private config: ConfigService, private alertCtrl: AlertController, private loadingController: LoadingController,
              private auth: AuthService, private http: HttpClient) {
    this.base_url = config.get_base_url();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tratamientos = this.router.getCurrentNavigation().extras.state.user;
        this.smallerDate = this.router.getCurrentNavigation().extras.state.smaller
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    console.log('this.tratamientos: ', this.tratamientos);
    let smaller = this.tratamientos.filter(sm => moment(sm.buy_time).format('ll') === this.smallerDate)
    console.log('smaller: ', smaller, this.smallerDate);
    let smallerFmatted = new Date(this.smallerDate).toISOString();
    this.conditionSmaller = moment(smallerFmatted).diff(moment(), 'days');
    console.log('this.conditionSmaller: ', this.conditionSmaller);
    for (let trt of this.tratamientos) {
      if (moment(trt.buy_time).diff(moment(smallerFmatted), 'days') <= 4) {
        this.pedidoArr.push(trt);
      }
    }
    console.log(': pedido arr ', this.pedidoArr);
  }

  Volver() {
    this.router.navigate(['perfil']);
  }

  goBuscar(){
    this.router.navigate(['medicamentos']);
  }

  getPrice() {
    return this.pedidoArr.reduce((i, j) => i + j.mrp, 0);
  }
  getTotal() {
    return this.getPrice() + 2000;
  }
  getTax() {
    this.subtotal = 0;
    for (let ta of this.pedidoArr) {
      if (ta.tax !== 0) {
        this.subtotal += ta.tax;
      }
    }
    return this.subtotal;
  }
  subTotal(){
    return this.getPrice() - this.getTax();
  }

  removeMed(medicine){
    for (let [index, p] of this.pedidoArr.entries()) {
      if(p.item_code === medicine.item_code){
        this.pedidoArr.splice(index, 1);
      }
    }
  }

  async send() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    for (let code of this.pedidoArr) {
      this.item_code.push(code.item_code);
      this.cantidad.push(code.medicine_count = 1);
      this.formula.push(code.is_pres_required);
    }

    this.orden = {
      email: this.userid,
      cart_length: this.pedidoArr.length,
      shipping_cost: 2000,
      quantity: this.cantidad,
      is_pres_required: 0,
      item_code: this.item_code
    };
    this.http.post(`${this.base_url}medicine/store-prescription/0`,
      this.orden)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(async (mensaje) => {
        this.code = mensaje;
        this.code2 = this.code.status;
        if (this.code2 === 'SUCCESS') {
          const alert = await this.alertCtrl.create({
            message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Tu orden fue creada',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'btnalert',
                handler: (data) => { alert2.present(); }
              }
            ]
          });
          const alert2 = await this.alertCtrl.create({
            message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">En algunos minutos verificaremos tu orden',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'btnalert',
                handler: (data) => { this.router.navigate(['mispedidos']); }
              }
            ]
          });
          await alert.present();

        }
        else {
          console.log(mensaje);
          const alert = await this.alertCtrl.create({
            message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">Su orden no fue creada, intente de nuevo',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
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
