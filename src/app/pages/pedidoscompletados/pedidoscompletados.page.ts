import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pedidoscompletados',
  templateUrl: './pedidoscompletados.page.html',
  styleUrls: ['./pedidoscompletados.page.scss'],
})
export class PedidoscompletadosPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  goBack(){
    // this.router.navigate(['mipastillero']);
  }

}
