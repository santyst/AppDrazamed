import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-alarm',
  templateUrl: './edit-alarm.page.html',
  styleUrls: ['./edit-alarm.page.scss'],
})
export class EditAlarmPage implements OnInit {
  items: any;
  base_url: any;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  alarmas: any;
  intervaloNumber: any;
  constructor(private config: ConfigService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.base_url = config.get_base_url();
  }

  intervalo = [{ id: 4, name: '4 Horas' }, { id: 8, name: '8 Horas' }, { id: 12, name: '12 Horas' }, { id: 16, name: '16 Horas' },
  { id: 24, name: '24 Horas' }, { id: 48, name: '48 Horas' }, { id: 72, name: '72 Horas' }];

  dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

  alarmasForm = this.formBuilder.group({
    mensaje: ['', [Validators.required]],
    time: ['', [Validators.required]],
    date: ['', [Validators.required]],
    cada: ['', [Validators.required]]
  });

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.items = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.items);
        this.alarmas = {
          cada: this.items.cada,
          date: this.doSomething,
          time: this.items.time,
          mensaje: this.items.item_name,
          item_name: this.items.item_name,
          composition: this.items.composition,
          item_code: this.items.item_code
        };
      }
    });
  
  }
  doSomething(date) {
    moment(date).format('YYYY-MM-DD');
  }
  doSomethingh(time) {
    moment(time).format('LT');
  }
  goBack(){
    this.router.navigate(['perfil']);
  }
  editAlarm(){

    console.log(this.alarmas);
  }
}
