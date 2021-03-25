import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-request-closed',
  templateUrl: './request-closed.page.html',
  styleUrls: ['./request-closed.page.scss'],
})
export class RequestClosedPage implements OnInit {
  base_url: any;
  user: any;
  userid: any;
  orden: any;
  cart_med: any;
  id: any;
  status: any;
  invoice_i: any;
  subtotal1: any;
  apiUrl2 = `.jpg`;
  apiUrl = `images/products/`;

  constructor(private router: Router, public menuCtrl: MenuController, private config: ConfigService, 
              private http: HttpClient, private auth: AuthService, private route: ActivatedRoute) { 
    this.base_url = config.get_base_url();
    this.user = this.auth.getusuario();
    this.userid = this.user.email;
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.orden = this.router.getCurrentNavigation().extras.state.user;
        this.cart_med = this.orden.get_cart;
        this.id = this.orden.id;
        this.status = this.orden.status;
        console.log(this.orden);
        console.log(this.cart_med);
        this.invoice_i = this.cart_med[0].invoice_id;
        console.log(this.invoice_i);
      }
    });
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  goBack(){
    this.router.navigate(['mispedidos']);
  }
  goCart(){
    this.router.navigate(['carrito']);
  }
  getPrice() {
    return this.cart_med.reduce((i, j) => i + j.total_price, 0);
  }
  getTotal() {
    return this.getPrice() + 2000;
  }
  getTax() {
    this.subtotal1 = 0;
    for (let ta of this.cart_med) {
      if (ta.tax !== 0) {
        this.subtotal1 += ta.tax;
      }
    }
    return this.subtotal1;
  }
  subTotal(){
    return this.getPrice() - this.getTax();
  }
}
