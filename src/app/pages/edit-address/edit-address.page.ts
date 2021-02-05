import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {
  base_url: any;
  address: any;
  dir: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private config: ConfigService, private router: Router,
              private formBuilder: FormBuilder, public menuCtrl: MenuController) {
    this.base_url = config.get_base_url();
   }
   direccionForm = this.formBuilder.group({
    direccion: ['', [Validators.required]],
    detalles: ['', [Validators.required]],
  });
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.address = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.address);
      }
    });
    this.dir = {
      direccion: this.address,
      detalles: '',
    };
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  cancelar(){
    this.direccionForm.reset();
    this.router.navigate(['misdirecciones']);
  }
  misDirecciones(){
    this.router.navigate(['misdirecciones']);
  }
  addDirection(dir){
    console.log(dir.direccion + ' ' + dir.detalles);
    this.router.navigate(['misdirecciones']);
  }
}
