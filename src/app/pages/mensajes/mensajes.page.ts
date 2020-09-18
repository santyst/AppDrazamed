import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  posteo: Observable<any>;
  postUrl = `https://dev.drazamed.com/user/contact-us`;

  dataToSend = {
    name: '',
  phone: '',
  msg: '',
  email: '',
};
  constructor(
    private menuCtrl: MenuController,
    private cartService: CartService,
    private router: Router,
    private formBuilder: FormBuilder,
    public http: HttpClient
  ) { 
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  @ViewChild('mySlider') slider: IonSlides;
  sliderOpts = {
    autoplay: true,
    speed: 1000,
    zoom: {
      maxRatio: 5
    }
  };

  cartItemCount: BehaviorSubject<number>;

mensajesForm = this.formBuilder.group({
  nombre: ['', [Validators.required]],
  telefono: ['', [Validators.required]],
  correo: ['', [Validators.required]],
  mensaje: ['', [Validators.required]]
});

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
   goCarrito(){
    this.router.navigate(['carrito']);
  }

  public submit(){
    console.log(this.mensajesForm.value);
    this.mensajesForm.reset();
  }


  postData(){
    console.log('Datos enviados: ');
    console.log(this.dataToSend);
    this.http.post(`${this.postUrl}`, this.dataToSend
    ,{headers: new HttpHeaders({"Content-Type":"application/json"})}).subscribe((mensaje) => {
    console.log(mensaje);
  });
  }

 

}
