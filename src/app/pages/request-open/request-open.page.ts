import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-request-open',
  templateUrl: './request-open.page.html',
  styleUrls: ['./request-open.page.scss'],
})
export class RequestOpenPage implements OnInit {

  orden: any;
  cart_med: any;
  id: any;
  user: any;
  userid: any;
  base_url: any;
  payment_url = `medicine/make-mercado-pago-payment/`;
  apiUrl2 = `.jpg`;
  apiUrl = `images/products/`;
  ad: any;
  address: any;
  linkpay: any;
  status: any;
  invoice_i: any;
precio: any;

  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute, private http: HttpClient, private config: ConfigService) {
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
        this.http.get(`${this.base_url}${this.payment_url}${this.invoice_i}/1?email=${this.userid}`).subscribe(pay => {
          this.ad = pay;
          this.address = this.ad.posted.address;
          this.linkpay = this.ad.preference.init_point;
        });
      }
    });

  }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['mispedidos']);
  }
  goCart() {
    this.router.navigate(['carrito']);
  }
  goPago() {
    window.open(this.linkpay);
  }
  getPrice(){
    return this.cart_med.reduce((i, j) => i + j.total_price , 0);
  }
}
