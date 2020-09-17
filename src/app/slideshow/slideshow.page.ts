import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.page.html',
  styleUrls: ['./slideshow.page.scss'],
})
export class SlideshowPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { 
  }

  ngOnInit() {
  }
goLogin(){
  this.router.navigate(['login1']);
}
ionViewWillEnter() {
  this.menuCtrl.enable(false);
 }
}
