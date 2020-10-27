import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-processtreatment',
  templateUrl: './processtreatment.page.html',
  styleUrls: ['./processtreatment.page.scss'],
})
export class ProcesstreatmentPage implements OnInit {

  porcentaje = 70;
  restante = 100 - this.porcentaje;
  alarma: any;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  base_url: any;

  constructor(private router: Router, private route: ActivatedRoute, private config: ConfigService) {
    this.base_url = config.get_base_url();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.alarma = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.alarma);
      }
    });
  }

  ngOnInit() {
  }
  goHome() {
    this.router.navigate(['perfil']);
  }
  goPerfil() {
    this.router.navigate(['perfil']);
  }
}