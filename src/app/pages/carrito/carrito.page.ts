import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  apiUrl3 = `https://dev.drazamed.com`;
  imgUrl= `https://dev.drazamed.com/images/products/default.png`;
  cart = [];
  constructor(private router: Router, private menuCtrl: MenuController, private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  goPerfil(){
    this.router.navigate(['perfil']);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  goHome(){
    this.router.navigate(['home']);
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.mrp * j.amount, 0);
  }
  goBuscar(){
    this.router.navigate(['medicamentos']);
  }
}
