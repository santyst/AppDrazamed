import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-open',
  templateUrl: './request-open.page.html',
  styleUrls: ['./request-open.page.scss'],
})
export class RequestOpenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
goBack(){
  this.router.navigate(['mispedidos']);
}
goCart(){
  this.router.navigate(['carrito']);
}
}
