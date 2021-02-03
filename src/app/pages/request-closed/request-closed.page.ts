import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-request-closed',
  templateUrl: './request-closed.page.html',
  styleUrls: ['./request-closed.page.scss'],
})
export class RequestClosedPage implements OnInit {

  constructor(private router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  goBack(){
    this.router.navigate(['mispedidos']);
  }
  goCart(){
    this.router.navigate(['carrito']);
  }
}
