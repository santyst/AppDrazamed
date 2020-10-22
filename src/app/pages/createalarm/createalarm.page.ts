import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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


  base_url: any;
  user: any;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  userid: any;
  pedidos: any;
  items2 = [];
  items3: any;
  items: any[] = [];
  isItemAvailable =false;
  intervalo = ['4 horas', '8 horas', '12 horas', '16 horas', '24 horas', '48 horas', '72 horas'];

  horas = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM',
    '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];

  dosis = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

  constructor(private router: Router, private http: HttpClient, private config: ConfigService, private auth: AuthService) {
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
      console.log(this.items2);
    });

  }

  ngOnInit() {
  }
  initializeItems(){
    this.items = this.items2;
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
        
        this.items = this.items2.filter((item: any) => {
            return (item.item_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    }
  }
  fillSearchbarText(item: string) {
    this.searchbarInput = item;
    this.itemSelected.emit(item);
    console.log(item);
  }
}
