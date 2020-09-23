import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgottenpassword',
  templateUrl: './forgottenpassword.page.html',
  styleUrls: ['./forgottenpassword.page.scss'],
})
export class ForgottenpasswordPage implements OnInit {

  ready: any;
  ready2: any;
  ready3: any;
  ready4: any;
  postForget = `https://dev.drazamed.com/user/reset-password`;
  resetUrl = `https://dev.drazamed.com/user/reset-password`;
  forgottenForm: FormGroup;
  getNewForm: FormGroup;
  constructor(
    private menuCtrl: MenuController,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.forgottenForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')]),
    });
    this.getNewForm = this.formBuilder.group({
      email:  new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')]),
      security_code: new FormControl('', [Validators.required]),
      new_password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    },
    {validators: this.password.bind(this)}
    );
  }

  error_messages = {
    email: [{type: 'pattern', message: 'Ingresa un email valido'}]
  };
  correo = {
    email: ''
  }
  forgotten  = {
    email: '',
    security_code: '',
    new_password: '',
    confirm_password: ''
  }
  ngOnInit() {
  }
  password(formGroup: FormGroup) {
    const { value: new_password } = formGroup.get('new_password');
    const { value: confirmPassword } = formGroup.get('confirm_password');
    return new_password === confirmPassword ? null : { passwordNotMatch: true };
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async forgottenPass() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.http.post(`${this.postForget}`, this.correo)
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
    .subscribe(async (res) => {
        this.ready = res;
        this.ready2 = this.ready.status;
        if (this.ready2 !== 'SUCCESS'){
          const alert = await this.alertController.create({
            message: '<img src = "../../assets/img/RECURSOS/wrong.png" class="alert">No existe un usuario con este correo',
            mode: 'ios',
            cssClass: 'failed',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Aceptar',
                cssClass: 'btnalert'
              }
            ]
          });
          alert.present();
        }
      });
  }

  async resetPass(){
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Por favor espera...',
      mode: 'ios',
      spinner: 'dots'
    });
    await loading.present();
    this.http.post(`${this.resetUrl}`, this.forgotten
    , {headers: new HttpHeaders({'Content-Type': 'application/json'})})
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
    .subscribe(async (val) => {
      this.ready3 = val;
      this.ready4 = this.ready3.status;
      if (this.ready4 === 'SUCCESS'){
        const alert = await this.alertController.create({
          message: '<img src = "../../assets/img/RECURSOS/check.png" class="alert">Se ha reestablecido tu contraseña',
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
