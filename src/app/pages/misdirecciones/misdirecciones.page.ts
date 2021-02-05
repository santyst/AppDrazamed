import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { NavigationExtras, Router } from '@angular/router';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-misdirecciones',
  templateUrl: './misdirecciones.page.html',
  styleUrls: ['./misdirecciones.page.scss'],
})
export class MisdireccionesPage implements OnInit {

  cartItemCount: BehaviorSubject<number>;
  direcciones = [];
  taskList = [];
  taskName: any;
  user: any;
  base_url: any;
  useremail: any;
  address: any;
  profile: any;
  constructor(private cartService: CartService, private router: Router, private direccionService: DireccionesService,
              private auth: AuthService, private config: ConfigService, private http: HttpClient, public menuCtrl: MenuController) {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.base_url = config.get_base_url();
    this.user = this.auth.getusuario();
    this.useremail = this.user.email;
    this.http.get(`${this.base_url}user/get-user-data/0?email=${this.useremail}`).subscribe((val) => {
       this.profile = val;
       this.address = this.profile.address;
    });
  }

  ngOnInit() {
    this.direcciones = this.direccionService.getDirection();
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  goAddD() {
    this.router.navigate(['adddirection']);
  }
  goCarrito() {
    this.router.navigate(['carrito']);
  }
  removeDireccion(product) {
    this.direccionService.removeDirection(product);
  }
  updateDefAd(ad){
    let navigationExtras: NavigationExtras = {
      state: {
        user: ad
      }
    };
    this.router.navigate(['edit-address'], navigationExtras);
  }
}
