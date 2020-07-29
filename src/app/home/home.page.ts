import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

public items: any;
public items2: any;
public items3: any;
public items4: any;
apiURL = `https://drazamed.com/medicine/load-medicine-cats/0`;
apiURL2 = `https://drazamed.com/favorites`;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private http: HttpClient
  ) {
    this.http.get(`${this.apiURL}`).subscribe((response) => {
      this.items = response;
      this.items2 = this.items [0].result.msg;
  });

    this.http.get(`${this.apiURL2}`).subscribe((response) => {
      this.items3 = response;
      this.items4 = this.items3.result.msg [0].name;
      console.log(this.items4);
    });

  }

    ionViewWillEnter() {
 this.menuCtrl.enable(true);
}


}
