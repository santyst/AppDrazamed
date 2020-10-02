import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuController, IonSearchbar } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  @Output() itemSelected = new EventEmitter<string>();
  @ViewChild('searchBarInput', { static: true}) searchbarInput: string;
  
  cartItemCount: BehaviorSubject<number>;
  isItemAvailable = false;
  meds: any;
  fullmed: any;
  fullmed1: any;
  fullmed2: any;
  apiURL = `https://dev.drazamed.com/medicine/load-medicine-web/1?term=`;
  apiUrl7 = `https://dev.drazamed.com/images/products/`;
  apiUrl5 = `https://dev.drazamed.com`
  apiUrl8 = `.jpg`;
  items: any[] = [];
 apiURL2 = `https://dev.drazamed.com/medicine/load-medicine-web/0?n=`;
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService
  ) {
    this.http.get(`${this.apiURL}`).subscribe((response) => {
        this.meds = response;
    });
    this.cartItemCount = this.cartService.getCartItemCount();
}

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
  goCarrito(){
    this.router.navigate(['carrito']);
  }
  initializeItems(){
    this.items = this.meds;
}
getItems(ev: any) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the searchbar
  const val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.meds.filter((item: any) => {
          return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
  } else {
      this.isItemAvailable = false;
  }
}
fillSearchbarText(item: string){
  this.searchbarInput = item;
  this.isItemAvailable = false;
  this.itemSelected.emit(item);
  console.log(item);
  this.http.get(`${this.apiURL2}${item}`).subscribe((res) => {
    this.fullmed = res;
    this.fullmed1 = this.fullmed.data;
    this.fullmed2 = this.fullmed.data [0].is_pres_required;
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.fullmed1,
        formula: this.fullmed2
      }
    };
    this.router.navigate(['resultsearch'], navigationExtras);
  });
}

}
