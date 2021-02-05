import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { async } from '@angular/core/testing';
import { ConfigService } from 'src/app/services/config.service'
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: any;
  cartItemCount: BehaviorSubject<number>;
  apiUrl = `favorites`;
  apiUrl2 = `medicine/load-medicine-web/1?term=`;
  apiUrl3 = `medicine/load-medicine-web/0?n=`;
  apiUrl4 = `medicine/search-medicine/1?cat=`;
  apiUrl5 = ``;
  apiUrl6 = `images/products/default.png`;
  apiUrl7 = `images/products/`;
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
  base_url: any;

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute,
    private http: HttpClient, private config: ConfigService, private alertCtrl: AlertController,
    public menuCtrl: MenuController) {
    this.base_url = config.get_base_url();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.categorias = this.router.getCurrentNavigation().extras.state.cat;
        console.log(this.categorias);
        this.http.get(`${this.base_url}${this.apiUrl}`).subscribe((favorito) => {
          this.fav = favorito;
          this.fav2 = this.fav.result.msg;
        });
        this.http.get(`${this.base_url}${this.apiUrl4}${this.categorias}&lab=icom`).subscribe((res) => {
          this.searchres = res;
          // this.searchres2 = this.searchres.result.status;
          this.searchres5 = this.searchres.result.msg;
          // console.log(this.searchres2);
          console.log(this.searchres5);

        });
        this.http.get(`${this.base_url}${this.apiUrl4}${this.categorias}&xlab=icom`).subscribe((res) => {
          this.searchres3 = res;
          this.searchres4 = this.searchres3.result.msg;
          console.log(this.searchres4);

        });
      }
    });

  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  buscarMed() {
    this.router.navigate(['medicamentos']);
  }
  async addToCart(product) {
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
  goCarrito() {
    this.router.navigate(['carrito']);
  }
}
