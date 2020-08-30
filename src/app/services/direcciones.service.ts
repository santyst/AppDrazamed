import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  private direccion = [];
  constructor(private alertCtrl: AlertController) { }

 
 
  getDirection() {
    return this.direccion;
  }
 

  addDirection(product) {
    let added = false;
    for (let p of this.direccion) {
      if (p.detalles === product.detalles) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.direccion.push(product);
    }
  }

  removeDirection(product) {
        this.direccion.splice(product, 1);
  }
}
