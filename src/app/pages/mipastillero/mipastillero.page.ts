import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AlertController, IonSlides, Platform } from '@ionic/angular';
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
items: any;
items2 = [];

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
              private config: ConfigService, private tratamientoService: TratamientosService, private alertCtrl: AlertController) {
    this.base_url = config.get_base_url();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.platform.ready().then(() =>{
      this.alarmas = this.tratamientoService.getAlarma();
      /*for (let item of this.alarmas) {
        this.items = item.medicines;
        for (var i = 0; i < this.items.length; i++) {
          this.items2.push(this.items[i]);
        }
      }*/
      console.log(this.alarmas);
    });
  }

  ngOnInit() {
  }
  createAlarm(){
    this.router.navigate(['createalarm']);
  }
  editAlarm(alarmas){
    let navigationExtras: NavigationExtras = {
      state: {
        user: alarmas
      }
    };
    this.router.navigate(['edit-alarm'], navigationExtras);
  }
  goCarrito(){
    this.router.navigate(['carrito']);
  }
  async removetreatment(alarma){
    const alert = await this.alertCtrl.create({
      message: '<img src = "../../assets/img/RECURSOS/iconos drazamed-27.png" class="alert">¿Deseas eliminar el tratamiento?',
      mode: 'ios',
      cssClass: 'failed',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Si',
          cssClass: 'btnalert',
          handler: data => {
            this.tratamientoService.removeAlarm(alarma);
          }
        },
        {
          text: 'No',
          cssClass: 'btnalert',
        }
      ]
       });
    await alert.present();
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
