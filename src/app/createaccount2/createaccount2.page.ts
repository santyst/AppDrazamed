import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { uniqueDisplayName } from '../validators/unique_user';



@Component({
  selector: 'app-createaccount2',
  templateUrl: './createaccount2.page.html',
  styleUrls: ['./createaccount2.page.scss'],
})
export class Createaccount2Page implements OnInit {
  data1: any;
  form: any;
  public registerForm: FormGroup;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private alertController: AlertController,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.registroForm = this.formBuilder.group({
      documento: new FormControl('', [Validators.required]),
      nacimiento: new FormControl('', [Validators.required, Validators.minLength(9)]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      genero: new FormControl('', [Validators.required]),
      convenio: new FormControl('', [Validators.required]),
      aceptar: new FormControl('', [Validators.requiredTrue])
    });
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data1 = this.router.getCurrentNavigation().extras.state.user;

      }
    });
  }

  status: string;
  accept: boolean;
  register = {
    documento: '',
    nacimiento: this.doSomething,
    address: '',
    phone: '',
    genero: '',
    convenio: ''
  };

  registroForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {
    aceptar: [{ type: 'required', message: 'Acepta los términos y condiciones' }]
  };


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  doSomething(nacimiento) {
    moment(nacimiento).format('YYYY-MM-DD');
  }
  async updateD() {
    const datos = Object.assign(this.data1, this.register);
    console.log(datos);
    /*this.http.post(`https://reqres.in/api/users`, datos
    , {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((mensaje) => {
    console.log(mensaje);
  });*/
    const alert = await this.alertController.create({
      header: 'La cuenta ha sido creada',
      message: 'Verifica tu correo para activar la cuenta.',
      mode: 'ios',
      cssClass: 'failed',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'btnalert',
          handler: (data) => { this.router.navigate(['login2']); }
        }
      ]
    });
    alert.present();
  }
}
