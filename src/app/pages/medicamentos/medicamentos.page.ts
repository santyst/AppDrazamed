import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuController, IonSearchbar, Config } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  @Output() itemSelected = new EventEmitter<string>();
  @ViewChild('searchBarInput', { static: true }) searchbarInput: string;
 
  cartItemCount: BehaviorSubject<number>;
  isItemAvailable = false;
  meds: any;
  fullmed: any;
  fullmed1: any;
  fullmed2: any;
  base_url: any;
  apiURL = `medicine/load-medicine-web/1?term=`;
  apiUrl7 = `images/products/`;
  apiUrl5 = ``
  apiUrl8 = `.jpg`;
  items: any[];
  apiURL2 = `medicine/load-medicine-web/0?n=`;
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService,
    private config: ConfigService
  ) {
    console.log(config.get_base_url());
    this.base_url = config.get_base_url();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.http.get(`${this.base_url}${this.apiURL}${val}`).subscribe((response) => {
        this.meds = response;
        this.items = this.meds;
      });
    } else {
      this.isItemAvailable = false;
    }
  }
  
  fillSearchbarText(item: string) {
    this.searchbarInput = item;
    this.isItemAvailable = false;
    this.itemSelected.emit(item);
    console.log(item);
    this.http.get(`${this.base_url}${this.apiURL2}${item}`).subscribe((res) => {
      this.fullmed = res;
      this.fullmed1 = this.fullmed.data;
      this.fullmed2 = this.fullmed.data[0].is_pres_required;
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.fullmed1,
          formula: this.fullmed2
        }
      };
      this.router.navigate(['resultsearch'], navigationExtras);
    });
    this.searchbarInput = '';
  }

}
