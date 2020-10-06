import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

categorias: any;
cartItemCount: BehaviorSubject<number>;
apiUrl = `http://dra.devel/favorites`;
apiUrl2 = `http://dra.devel/medicine/load-medicine-web/1?term=`;
apiUrl3 = `http://dra.devel/medicine/load-medicine-web/0?n=`;
apiUrl4 = `http://dra.devel/medicine/search-medicine/1?cat=`;
apiUrl5 = `http://dra.devel`;
apiUrl6 = `http://dra.devel/images/products/default.png`;
apiUrl7 = `http://dra.devel/images/products/`;
apiUrl8 = `.jpg`;

fav: any;
fav2: any;
data: any;
med2: any;
med3: any;
med4: any;
med5: any;
data1: any;
err1: any;
medis: any;
imagen: any;
searchres: any;
searchres2: any;
searchres3: any;
searchres4: any;
searchres5: any;

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute,private http: HttpClient) { 
    this.cartItemCount = this.cartService.getCartItemCount();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.categorias = this.router.getCurrentNavigation().extras.state.cat;
        console.log(this.categorias);
        this.http.get(`${this.apiUrl}`).subscribe((favorito) => {
          this.fav = favorito;
          this.fav2 = this.fav.result.msg;
        });
        this.http.get(`${this.apiUrl4}${this.categorias}&lab=icom`).subscribe((res) => {
          this.searchres = res;
          // this.searchres2 = this.searchres.result.status;
          this.searchres5 = this.searchres.result.msg;
          // console.log(this.searchres2);
          console.log(this.searchres5);
          
        });
        this.http.get(`${this.apiUrl4}${this.categorias}&xlab=icom`).subscribe((res) => {
          this.searchres3 = res;
          this.searchres4 = this.searchres3.result.msg;
          console.log(this.searchres4);
          
        });
      }
    });
    
  }
  ngOnInit() {
  }

  buscarMed(){
    this.router.navigate(['medicamentos']);
  }
  addToCart(product){
    this.cartService.addProduct(product);
   }
   goCarrito(){
    this.router.navigate(['carrito']);
  }
}
