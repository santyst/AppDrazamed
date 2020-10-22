import { Component, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController, IonSlides, IonRouterOutlet } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ConfigService } from 'src/app/services/config.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
public items4: any;
public items5: any;
public items6: any;
med3: any;
apiURL = `medicine/load-medicine-cats/0`;
apiURL2 = `favorites`;
apiURL3 = ``;
apiUrl7 = `images/products/`;
apiUrl8 = `.jpg`;
apiUrl1 = `images/products/default.png`;
base_url:any;


  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private http: HttpClient,
    private cartService: CartService,
    private config: ConfigService,
    private routerOutlet: IonRouterOutlet
  ) {
    
    this.base_url = config.get_base_url();
    this.http.get(`${this.base_url}${this.apiURL}`).subscribe((response) => {
      this.items = response;
      this.items2 = this.items [0].result.msg;
  });

    this.http.get(`${this.base_url}${this.apiURL2}`).subscribe((response) => {
      this.items3 = response;
      this.items4 = this.items3.result.msg;
    });

    this.cartItemCount = this.cartService.getCartItemCount();
  }

    ionViewWillEnter() {
 this.menuCtrl.enable(true);
 this.routerOutlet.swipeGesture = false;
}
goCarrito(){
  this.router.navigate(['carrito']);
}
buscarMed(){
  this.router.navigate(['medicamentos']);
}
addToCart(product){
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
