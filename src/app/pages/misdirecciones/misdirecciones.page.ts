import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-misdirecciones',
  templateUrl: './misdirecciones.page.html',
  styleUrls: ['./misdirecciones.page.scss'],
})
export class MisdireccionesPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit() {
  }
  goAddD(){
    this.router.navigate(['adddirection']);
  }
  goCarrito(){
    this.router.navigate(['carrito']);
  }
}
