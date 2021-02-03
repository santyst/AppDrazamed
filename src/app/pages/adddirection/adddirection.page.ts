import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-adddirection',
  templateUrl: './adddirection.page.html',
  styleUrls: ['./adddirection.page.scss'],
})
export class AdddirectionPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private directionService: DireccionesService,
              public menuCtrl: MenuController) { }
  direccionForm = this.formBuilder.group({
    ciudad: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    detalles: ['', [Validators.required]],
    nombredir: ['', [Validators.required]]
  });

dir = {
  ciudad: '',
  direccion: '',
  detalles: '',
  nombredir: ''
};

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  public submit(){
    console.log(this.direccionForm.value);
    this.direccionForm.reset();
  }
  misDirecciones(){
    this.router.navigate(['misdirecciones']);
  }
  addDirection(direcciones){
    this.directionService.addDirection(direcciones);
    this.router.navigate(['misdirecciones']);
  }
  cancelar(){
    this.direccionForm.reset();
  }
}
