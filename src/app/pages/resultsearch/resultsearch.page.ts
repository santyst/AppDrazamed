import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarritoPage } from '../carrito/carrito.page';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resultsearch',
  templateUrl: './resultsearch.page.html',
  styleUrls: ['./resultsearch.page.scss'],
})
export class ResultsearchPage implements OnInit {


  apiUrl7 = `https://dev.drazamed.com/images/products/`;
  apiUrl8 = `.jpg`;
  imagen1 = `https://dev.drazamed.com/images/products/default.png`;
  cartItemCount: BehaviorSubject<number>;
  posteo: Observable<any>;
  imgUrl = [{ imagen: `https://dev.drazamed.com/images/products/default.png` }];
  data: any;
  data1: any;
  formul: any[] = [];
  name: '';
  
  err1: any;
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private http: HttpClient, private cartService: CartService, private modalCtrl: ModalController, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        this.data1 = this.router.getCurrentNavigation().extras.state.formula;
        console.log(this.data);
        if (this.data1 === 1) {
          this.formul = ['Se requiere formula'];
        } else {
          this.formul = ['No se requiere formula'];
        }
        for (let imgg of this.data) {
          this.http.get(`${this.apiUrl7}${imgg.item_code}${this.apiUrl8}`).subscribe((val) => {

          }, async (err: HttpErrorResponse) => {
            this.err1 = err.status;
            console.log(this.err1);
          });
        }
      }
    });
  }
  ngOnInit() {

    this.cartItemCount = this.cartService.getCartItemCount();
  }
  goBack() {
    this.router.navigate(['medicamentos']);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    this.router.navigate(['carrito']);
  }

  postData() {
    const postData = new FormData();
    postData.append('carro', this.name);
    this.posteo = this.http.post('http://localhost/httppost/json.php', postData);
    this.posteo.subscribe(data => {
      console.log(data);
    });
  }
}
