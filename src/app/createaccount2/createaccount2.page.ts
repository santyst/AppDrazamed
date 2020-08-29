import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { uniqueDisplayName } from '../validators/unique_user';


@Component({
  selector: 'app-createaccount2',
  templateUrl: './createaccount2.page.html',
  styleUrls: ['./createaccount2.page.scss'],
})
export class Createaccount2Page implements OnInit {

  public registerForm: FormGroup;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private alertController: AlertController,
    private userService: UserService
  ) {
    this.registroForm = this.formBuilder.group({
      documento: new FormControl('', [Validators.required]),
      nacimiento: new FormControl('', [Validators.required, Validators.minLength(9)]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      genero: new FormControl('', [Validators.required]),
      convenio: new FormControl('', [Validators.required]),
      aceptar: new FormControl('', [Validators.requiredTrue])
    });
   }

  status: string;
  accept: boolean;
  register = {
    documento: '',
    nacimiento: this.doSomething,
    direccion: '',
    telefono: '',
    genero: '',
    convenio: ''
  };

  registroForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {
    aceptar: [{type: 'required', message: 'Acepta los términos y condiciones'}]
  };


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  doSomething(nacimiento){
     moment(nacimiento).format('YYYY-MM-DD');
  }
  updateD(){
    console.log(this.register);
    /*this.http.post(`https://reqres.in/api/users`, this.register
    , {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((mensaje) => {
    console.log(mensaje);
  });*/
  }
}
