import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';

@Component({
  selector: 'app-mispedidos',
  templateUrl: './mispedidos.page.html',
  styleUrls: ['./mispedidos.page.scss'],
})
export class MispedidosPage implements OnInit {
  isYesClicked = false;
  isNoClicked = false;
  base_url: any;
  user1: any;
  userid: any;
  orders: any;
  orden: any;
  orden2: any;
  push: any;
  push1: any;
  cart_med: any;
  id: any;
  user: any;
  payment_url = `medicine/make-mercado-pago-payment/`;
  ad: any;
  address: any;
  linkpay: any;
  status: any;
  invoice_i: any;
  precio: any;
  constructor(private iab: InAppBrowser, private router: Router, private http: HttpClient, private auth: AuthService, private menuCtrl: MenuController, private config: ConfigService) {
    this.base_url = config.get_base_url();
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    this.orders = this.http.get(`${this.base_url}my-prescriptions?email=${this.userid}`).subscribe(val => {
      this.orden = val;
      this.orden2 = this.orden[0];
      console.log(this.orden2);
    });
    const pusher = new Pusher('270a27c11d1a38de071b', {
      cluster: 'us2',
    });
    Pusher.logToConsole = true;
    const channel = pusher.subscribe('Drazamed');
    channel.bind('orderStatus', (data) => {
      this.push = data;
      this.push1 = this.push.message.id;
    });
  }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['perfil']);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  goOpen(ordenes) {

    let navigationExtras: NavigationExtras = {
      state: {
        user: ordenes,
      }
    };
    this.router.navigate(['request-open'], navigationExtras);
  }
  goClosed() {
    this.router.navigate(['request-closed']);
  }
  goPago(orden) {
    this.cart_med = orden.get_cart;
    this.id = orden.id;
    this.status = orden.status;
    console.log(orden);
    console.log(this.cart_med);
    this.invoice_i = this.cart_med[0].invoice_id;
    console.log(this.invoice_i);
    this.http.get(`${this.base_url}${this.payment_url}${this.invoice_i}/1?email=${this.userid}`).subscribe(pay => {
      this.ad = pay;
      this.address = this.ad.posted.address;
      this.linkpay = this.ad.preference.init_point;
      this.iab.create(this.linkpay, '_system');
    });
  }
}
