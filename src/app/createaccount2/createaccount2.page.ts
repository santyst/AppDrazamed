import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { uniqueDisplayName } from '../validators/unique_user';
import { finalize } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service'


@Component({
  selector: 'app-createaccount2',
  templateUrl: './createaccount2.page.html',
  styleUrls: ['./createaccount2.page.scss'],
})
export class Createaccount2Page implements OnInit {
  data1: any;
  form: any;
  ready: any;
  ready2: any;
  urlcreate = `user/create-user/1`;
  base_url: any;
  public registerForm: FormGroup;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private alertController: AlertController,
    private userService: UserService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private config: ConfigService
  ) {
    this.base_url = config.get_base_url();
    this.registroForm = this.formBuilder.group({
      // documento: new FormControl('', [Validators.required]),
      // nacimiento: new FormControl('', [Validators.required, Validators.minLength(9)]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      // genero: new FormControl('', [Validators.required]),
      // convenio: new FormControl('', [Validators.required]),
      aceptar: new FormControl('', [Validators.requiredTrue]),
      // user_type: new FormControl('', [Validators.required]),
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
   // documento: '',
   // nacimiento: this.doSomething,
    address: '',
    phone: '',
   // genero: '',
   // convenio: '',
   user_type: 3
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
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.http.post(`${this.base_url}${this.urlcreate}`, datos
    , {headers: new HttpHeaders({'Content-Type': 'application/json'})})
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
    .subscribe(async (mensaje) => {
    this.ready = mensaje;
    this.ready2 = this.ready.status;
    if (this.ready2 === 'SUCCESS'){
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
  });
  }
}
