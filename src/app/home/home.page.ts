import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChild('mySlider') slider: IonSlides;
sliderOpts = {
  autoplay: true,
  speed: 1000,
  zoom: {
    maxRatio: 5
  }
};

categories = ['AGUAS', 'ANTIAGREGANTE PLAQUETARIO', 'dolor e inflamacion', 'gripa y tos', 'mauricio', 'elbert', 'juan', 'camaro', 'hola', 'maincra',
'damian', 'xd'];

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {}

    ionViewWillEnter() {
 this.menuCtrl.enable(true);
}



}
