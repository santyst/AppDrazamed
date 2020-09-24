import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-closed',
  templateUrl: './request-closed.page.html',
  styleUrls: ['./request-closed.page.scss'],
})
export class RequestClosedPage implements OnInit {

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
