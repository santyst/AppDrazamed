import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  user: any;
  user1: any;
  userid: any;
  userid1: any;
  items: any;
  items2: any;
  cont: any;
  productos: any;
  carro: any;
  cartUrl = `http://dra.devel/medicine/add-cart/0?`;
  cartUrl2 = `http://dra.devel/medicine/update-cart/0?`;
  cartUrl3 = `http://dra.devel/medicine/remove-from-cart-app?`;
  mycart = `http://dra.devel/my-cart-app?email=`;
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  constructor(private http: HttpClient, private auth: AuthService, private platform: Platform) {
    this.platform.ready().then((val) => {
      this.getcurrentCont();
      this.user1 = this.auth.getusuario();
      this.userid = this.user1.email;
      this.http.get(`${this.mycart}${this.userid}`).subscribe((val) => {
        this.items = val;
        this.cart = this.items.items;
      });
    });
  }


  getCurrent() {
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    this.http.get(`${this.mycart}${this.userid}`).subscribe((val) => {
      this.items = val;
      this.items2 = this.items.items;
    });
    return this.items2;
  }

  getcurrentCont() {
    this.user1 = this.auth.getusuario();
    this.userid = this.user1.email;
    this.http.get(`${this.mycart}${this.userid}`).subscribe((val) => {
      this.items = val;
      this.items2 = this.items.items;
      this.productos = 0;
      for (let contador of this.items2) {

        this.cont = contador.medicine_count;
        // this.mrp = contador.unit_price;
        // this.subtotal = this.cont * this.mrp;
        // this.suma += this.subtotal;
        this.productos += parseInt(this.cont);
      }
      console.log('productos =' + this.productos);
      this.cartItemCount.next(this.productos);
    });
    return this.productos;
  }
  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }


  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.item_code === product.item_code) {
        p.medicine_count = parseInt(p.medicine_count);
        p.medicine_count += 1;
        added = true;
        this.user = this.auth.getusuario();
        this.userid1 = this.user.email;
        this.http.get(`${this.cartUrl2}item_code=${product.item_code}&new_qty=${p.medicine_count}&email=${this.userid1}`).subscribe((val) => {
          console.log(val);
        });
        break;
      }
    }
    if (!added) {
      product.medicine_count = 1;
      this.cart.push(product);
      this.user = this.auth.getusuario();
      this.userid = this.user.user_id;
      this.http.get(`${this.cartUrl}id=${product.id}&medicine=${product.value || product.name}&med_quantity=1&hidden_item_code=${product.item_code}
      &hidden_selling_price=${product.mrp}&pres_required=${product.is_pres_required}&user_id=${this.userid}`).subscribe((val) => {
        console.log(val);
      });
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.item_code === product.item_code) {
        p.medicine_count = parseInt(p.medicine_count);
        p.medicine_count -= 1;
        this.user = this.auth.getusuario();
        this.userid1 = this.user.email;
        this.http.get(`${this.cartUrl2}item_code=${product.item_code}&new_qty=${p.medicine_count}&email=${this.userid1}`).subscribe((val) => {
          console.log(val);
        });
        if (p.medicine_count == 0) {
          this.cart.splice(index, 1);
          this.user = this.auth.getusuario();
          this.userid1 = this.user.email;
          this.http.get(`${this.cartUrl3}email=${this.userid1}&item_code=${product.item_code}`).subscribe((val) => {
            console.log(val);
          });
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.item_code === product.item_code) {
        this.cartItemCount.next(this.cartItemCount.value - p.medicine_count);
        this.cart.splice(index, 1);
        this.user = this.auth.getusuario();
        this.userid1 = this.user.email;
        this.http.get(`${this.cartUrl3}email=${this.userid1}&item_code=${product.item_code}`).subscribe((val) => {
          console.log(val);
        });
      }
    }
  }
}
