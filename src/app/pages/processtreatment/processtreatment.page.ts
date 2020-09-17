import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processtreatment',
  templateUrl: './processtreatment.page.html',
  styleUrls: ['./processtreatment.page.scss'],
})
export class ProcesstreatmentPage implements OnInit {

porcentaje = 70;
restante = 100 - this.porcentaje;


  constructor(private router: Router) { 
  }

  ngOnInit() {
  }
goHome(){
  this.router.navigate(['perfil']);
}
}
