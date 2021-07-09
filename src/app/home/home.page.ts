import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController, IonSlides, IonRouterOutlet, AlertController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ConfigService } from 'src/app/services/config.service'
import { TratamientosService } from '../services/tratamientos.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
@ViewChild('mySlider') slider: IonSlides;
sliderOpts = {
  autoplay: true,
  speed: 1000,
  zoom: {
    maxRatio: 5
  }
};

cartItemCount: BehaviorSubject<number>;
public items: any;
public items2: any;
public items3: any;
public items4 = [];
public items5: any;
public items6: any;
med3: any;
apiURL = `medicine/load-medicine-cats/0`;
apiURL2 = `favorites`;
apiURL3 = ``;
apiUrl7 = `images/products/`;
apiUrl8 = `.jpg`;
apiUrl1 = `images/products/default.png`;
base_url: any;
alarmas = [];

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private http: HttpClient,
    private cartService: CartService,
    private config: ConfigService,
    private routerOutlet: IonRouterOutlet,
    private tratamientosService: TratamientosService,
    private alertCtrl: AlertController,
    private platform: Platform,
    private auth: AuthService
  ) {
    
    this.base_url = config.get_base_url();
    this.http.get(`${this.base_url}${this.apiURL}`).subscribe((response) => {
      this.items = response;
      this.items2 = this.items [0].result.msg;
  });

    this.http.get(`${this.base_url}${this.apiURL2}`).subscribe((response) => {
      this.items3 = response;
      this.items4 = this.items3.result.msg;
      
      var n = this.items4.length;
      var shuffled = this.items4.sort(function(){return .5 - Math.random()});
      var sel = shuffled.slice(0,n);
    });

    this.cartItemCount = this.cartService.getCartItemCount();
    this.tratamientosService.getTreatmen();
  }
ngOnInit(){
}
    ionViewWillEnter() {
      
 this.menuCtrl.enable(true);
 this.routerOutlet.swipeGesture = false;
 // console.log('usuario activo', this.auth.getusuario());
}
goCarrito(){
  this.router.navigate(['carrito']);
}
buscarMed(){
  this.router.navigate(['medicamentos']);
}
async addToCart(product){
  const alert = await this.alertCtrl.create({
    message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Producto agregado con éxito',
    mode: 'ios',
    cssClass: 'failed',
    buttons: [
      {
        text: 'Aceptar',
        cssClass: 'btnalert',
      }
    ]
     });
  await alert.present();
  this.cartService.addProduct(product);
 }

 goCat(item: string){
   let navigationsExtras: NavigationExtras = {
     state : {
       cat: item
     }
   }
   this.router.navigate(['categorias'], navigationsExtras);
 }
}
