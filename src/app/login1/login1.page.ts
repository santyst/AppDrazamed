import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goCreateAccount(){
  console.log("Button clicked");
  this.router.navigate(['createaccount'])
  }

}
