import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { uniqueDisplayName } from '../validators/unique_user';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  apiURL = `http://dra.devel/user/check-user-name?`;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private alertController: AlertController,
    private userService: UserService
  ) {
      this.registroForm = this.formBuilder.group({
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', {validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@([a-zA-Z0-9.-][a-zA-Z0-9.-])+.[a-zA-Z]{2,4}$')],
        asyncValidators: [uniqueDisplayName(this.userService, 100)],
        updateOn: 'blur' }),
        password: new FormControl('', [Validators.required]),
        confirm_password: new FormControl('', [Validators.required])
      },
      {
        validators: this.password.bind(this)
      });
    }

  get gDisplayName() { return this.registroForm.controls.email; }

  status: string;
  accept: boolean;
  register1 = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  registroForm: FormGroup;

  // tslint:disable-next-line: variable-name
  error_messages = {
    email: [{type: 'pattern', message: 'Ingresa un email valido'}]
  };

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirm_password');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  CreateA(){
    /*this.http.post(`https://reqres.in/api/users`, this.register
    , {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((mensaje) => {
    console.log(mensaje);
  });*/
  const navigationExtras: NavigationExtras = {
    state: {
      user: this.register1
    }
  };
  this.router.navigate(['createaccount2'], navigationExtras);
  }
}
