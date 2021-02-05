import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import * as moment from 'moment';
import { ConfigService } from 'src/app/services/config.service';

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

  constructor(private router: Router, public menuCtrl: MenuController, private route: ActivatedRoute, private config: ConfigService) {
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

}
