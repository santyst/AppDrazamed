import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddirection',
  templateUrl: './adddirection.page.html',
  styleUrls: ['./adddirection.page.scss'],
})
export class AdddirectionPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  direccionForm = this.formBuilder.group({
    ciudad: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    detalles: ['', [Validators.required]],
    nombredir: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  public submit(){
    console.log(this.direccionForm.value);
    this.direccionForm.reset();
  }
  misDirecciones(){
    this.router.navigate(['misdirecciones']);
  }
}
