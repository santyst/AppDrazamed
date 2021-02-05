import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-createalarm',
  templateUrl: './createalarm.page.html',
  styleUrls: ['./createalarm.page.scss'],
})
export class CreatealarmPage implements OnInit {
  @Output() itemSelected = new EventEmitter<string>();
  @ViewChild('searchBarInput', { static: true }) searchbarInput: string;

  isItemAvailable = false;
  base_url: any;
  user: any;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  userid: any;
  pedidos: any;
  items2 = [];
  items5 = [];
  items3: any;
  items4: any;
  items: any[] = [];
 

  constructor(private router: Router, private http: HttpClient, private config: ConfigService, private auth: AuthService,
              public menuCtrl: MenuController) {
    this.isItemAvailable = true;
    this.initializeItems();
    this.base_url = config.get_base_url();
    this.user = this.auth.getusuario();
    this.userid = this.user.email;
    this.http.get(`${this.base_url}my-prescriptions?email=${this.userid}`).subscribe((res) => {
      this.pedidos = res;

      for (let item of this.pedidos) {
        this.items3 = item.get_cart;
        for (var i = 0; i < this.items3.length; i++) {
          this.items2.push(this.items3[i]);
        }
      }
     
        for(let uni of this.items2){
         if(uni.units !== 'ML' && uni.units !== 'NoD' && uni.units !== 'GR'){
           this.items5.push(uni);
         }
        }
        console.log(this.items5);
    });

  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  initializeItems() {
    this.items = this.items5;
  }
  goBack() {
    this.router.navigate(['mipastillero']);
  }

  updateAlarm() {

  }
  getItems(ev: any) {

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items2.filter((item: any) => {
        return (item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.isItemAvailable = true;
    }
  }
  fillSearchbarText(item) {
    this.searchbarInput = item.item_name;
    this.itemSelected.emit(item.item_name);
    this.items4 = item;
    let navigationExtras: NavigationExtras = {
      state: {
        user: item
      }
    };
    this.router.navigate(['prueba'], navigationExtras);
    this.searchbarInput = '';
  }

}
