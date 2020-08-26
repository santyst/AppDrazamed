import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { uniqueDisplayName } from '../validators/unique_user';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  apiURL = `https://dev.drazamed.com/user/check-user-name?`;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private alertController: AlertController,
    private userService: UserService
  ) {
      this.registroForm = this.formBuilder.group({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        correo: new FormControl('', {validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')],
        asyncValidators: [uniqueDisplayName(this.userService, 100)],
        updateOn: 'blur' }),
        clave: new FormControl('', [Validators.required]),
        reclave: new FormControl('', [Validators.required]),
        documento: new FormControl('', [Validators.required]),
        nacimiento: new FormControl('', [Validators.required, Validators.minLength(9)]),
        direccion: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        genero: new FormControl('', [Validators.required]),
        tipo: new FormControl('', [Validators.required]),
        aceptar: new FormControl('', [Validators.requiredTrue])
      },
      {
        validators: this.password.bind(this)
      });
    }

  get gDisplayName() { return this.registroForm.controls.correo; }

  status: string;
  accept: boolean;
  register = {
    nombre: '',
    apellido: '',
    correo: '',
    clave: '',
    reclave: '',
    documento: '',
    nacimiento: this.doSomething,
    direccion: '',
    telefono: '',
    genero: '',
    tipo: ''
  };

  registroForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {

    correo: [{type: 'pattern', message: 'Ingresa un email valido'}],
    aceptar: [{type: 'required', message: 'Acepta los términos y condiciones'}]
  };

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('clave');
    const { value: confirmPassword } = formGroup.get('reclave');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

   logForm(form) {
    console.log(form.value);
  }
  doSomething(nacimiento){
     moment(nacimiento).format('YYYY-MM-DD');
  }

  /*goCreateAccount(){
    let data: Observable <any>;
    data = this.http.get(`${this.apiURL}u_name=${this.register.correo}`);
    data.subscribe(result => {
    this.status = result.status;
    console.log(this.status);
  });
    if(this.status !== 'SUCCESS'){
    console.log('La cuenta ya existe');
  }
 }*/
}
