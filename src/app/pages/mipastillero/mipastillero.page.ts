import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IonSlides, Platform } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ConfigService } from 'src/app/services/config.service';
import { TratamientosService } from 'src/app/services/tratamientos.service';

@Component({
  selector: 'app-mipastillero',
  templateUrl: './mipastillero.page.html',
  styleUrls: ['./mipastillero.page.scss'],
})
export class MipastilleroPage implements OnInit {

base_url: any;
apiUrl7 = `images/products/`;
apiUrl8 = `.jpg`;
item_name: any;
alarmas = [];

  @ViewChild('mySlider') slider: IonSlides;
  sliderOpts = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  cartItemCount: BehaviorSubject<number>;
  constructor(private cartService: CartService, private router: Router, private storage: Storage, private platform: Platform, 
              private config: ConfigService, private tratamientoService: TratamientosService) {
    this.base_url = config.get_base_url();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.platform.ready().then(() =>{
      this.alarmas = this.tratamientoService.getAlarma();
    });
  }

  ngOnInit() {
  }
  
  createAlarm(){
    this.router.navigate(['createalarm']);
  }
  goCarrito(){
    this.router.navigate(['carrito']);
  }
  processTreat(alarma){
    let navigationExtras: NavigationExtras = {
      state: {
        user: alarma
      }
    };
    this.router.navigate(['processtreatment'], navigationExtras);
  }
}
