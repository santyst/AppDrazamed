import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-createaccount2',
  templateUrl: './createaccount2.page.html',
  styleUrls: ['./createaccount2.page.scss'],
})
export class Createaccount2Page implements OnInit {

  public registerForm: FormGroup;
  constructor(
    private menuCtrl: MenuController,
    private userService: UserService
  ) {

   }



   onRegister() {
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      console.log('form invalid, not submitted');
      return;
    }
    console.log('submitting the form to the server');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
}
