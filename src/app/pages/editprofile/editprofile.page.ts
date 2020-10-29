import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  user: any;
  base_url: any;
  useremail: any;
  profile: any;
  firstName: any;
  lastName: any;
  mail: any;
  id: any;
  address: any;
  phone: any;
  constructor(private menuCtrl: MenuController, private auth: AuthService, private config: ConfigService, private http: HttpClient) {
    this.base_url = config.get_base_url();
    this.menuCtrl.enable(true);
    this.user = this.auth.getusuario();
    this.useremail = this.user.email;
    this.http.get(`${this.base_url}user/get-user-data/0?email=${this.useremail}`).subscribe((val) => {
      this.profile = val;
      this.firstName = this.profile.first_name;
      this.lastName = this.profile.last_name;
      this.mail = this.profile.mail;
      this.id = this.profile.idn;
      this.address = this.profile.address;
      this.phone = this.profile.phone;
      console.log(this.profile);
    });
  }

  ngOnInit() {
  }
  ionViewWillEnter() {

  }

  updateProfile() {

  }
}
