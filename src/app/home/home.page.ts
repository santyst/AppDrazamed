import { Component, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';


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
apiURL = `http://dra.devel/medicine/load-medicine-cats/0`;
apiURL2 = `http://dra.devel/favorites`;
apiURL3 = `http://dra.devel`;
apiUrl7 = `http://dra.devel/images/products/`;
apiUrl8 = `.jpg`;
apiUrl1 = `http://dra.devel/images/products/default.png`;



  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private http: HttpClient,
    private cartService: CartService,
  ) {
    this.http.get(`${this.apiURL}`).subscribe((response) => {
      this.items = response;
      this.items2 = this.items [0].result.msg;
  });

    this.http.get(`${this.apiURL2}`).subscribe((response) => {
      this.items3 = response;
      this.items4 = this.items3.result.msg;
    });

    this.cartItemCount = this.cartService.getCartItemCount();
  }

    ionViewWillEnter() {
 this.menuCtrl.enable(true);
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
