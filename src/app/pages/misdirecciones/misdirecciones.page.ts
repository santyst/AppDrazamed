import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-misdirecciones',
  templateUrl: './misdirecciones.page.html',
  styleUrls: ['./misdirecciones.page.scss'],
})
export class MisdireccionesPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService) { 
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit() {
  }

}
