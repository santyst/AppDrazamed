import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createalarm',
  templateUrl: './createalarm.page.html',
  styleUrls: ['./createalarm.page.scss'],
})
export class CreatealarmPage implements OnInit {

  intervalo = ['4 horas','8 horas', '12 horas','16 horas', '24 horas', '48 horas', '72 horas'];

  horas = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM',
   '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];

dosis = ['0.5', '1', '1.5', '2', '2.5', '3' , '3.5' , '4', '4.5', '5'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['mipastillero']);
  }
}
