import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-misdirecciones',
  templateUrl: './misdirecciones.page.html',
  styleUrls: ['./misdirecciones.page.scss'],
})
export class MisdireccionesPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;
  direcciones = [];
  taskList = [];
taskName: any;

  constructor(private cartService: CartService, private router: Router, private direccionService: DireccionesService) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit() {
    this.direcciones = this.direccionService.getDirection();
  }
  goAddD(){
    this.router.navigate(['adddirection']);
  }
  goCarrito(){
    this.router.navigate(['carrito']);
  }
  removeDireccion(product) {
    this.direccionService.removeDirection(product);
  }
 

}
