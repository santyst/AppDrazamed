import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mipastillero',
  templateUrl: './mipastillero.page.html',
  styleUrls: ['./mipastillero.page.scss'],
})
export class MipastilleroPage implements OnInit {

  @ViewChild('mySlider') slider: IonSlides;
  sliderOpts = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  cartItemCount: BehaviorSubject<number>;
  constructor(private cartService: CartService, private router: Router) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit() {
  }

  createAlarm(){
    this.router.navigate(['createalarm']);
  }
  goCarrito(){
    this.router.navigate(['carrito']);
  }
  processTreat(){
    this.router.navigate(['processtreatment']);
  }
}
