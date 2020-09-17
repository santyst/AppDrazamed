import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createalarm',
  templateUrl: './createalarm.page.html',
  styleUrls: ['./createalarm.page.scss'],
})
export class CreatealarmPage implements OnInit {

  intervalo = ['1 hora', '2 horas', '3 horas', '4 horas', '5 horas', '6 horas', '7 horas', '8 horas', '9 horas', '10 horas',
  '11 horas', '12 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas', '18 horas', '19 horas',
  '20 horas', '21 horas', '22 horas', '23 horas', '24 horas'];

  horas = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM',
   '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['mipastillero']);
  }
}
