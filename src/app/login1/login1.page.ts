import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { SignInWithApple, ASAuthorizationAppleIDRequest, AppleSignInResponse, AppleSignInErrorResponse } from '@ionic-native/sign-in-with-apple/ngx';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
iosPlt: Boolean;
userFacebook: any;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private auth: AuthService,
    private facebook: Facebook,
    private appleSign: SignInWithApple
  ) {}

  ngOnInit() {
  }

  goCreateAccount(){
  this.router.navigate(['createaccount'])
  }
login2(){
  this.router.navigate(['login2']);
}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    if(this.platform.is('ios')){
      this.iosPlt = true;
    }else{
      this.iosPlt = false;
    }
   }

   loginGoogle(){
     this.googlePlus.login({}).then(res => {
     console.log('res: ', res);
     this.auth.loginGoogle(res).subscribe(respon => {
       if(respon){
         this.router.navigate(['home']);
       }
     })
     }).catch(err => {
     console.log('err: ', err);
     });
   }

   loginFacebook(){
     this.facebook.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
      if (res.status === 'connected') {
        console.log('res fb login: ', res);
        this.getUserDetail(res.authResponse.userID);
      }  
     }).catch(e => console.log('Error logging into Facebook', e));
   }

   loginApple(){
     this.appleSign.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
      ]
    })
    .then((res: AppleSignInResponse) => {
      console.log("Apple login success:- " + res);
    })
    .catch((error: AppleSignInErrorResponse) => {
      console.error(error);
    });
   }

   logout(){
     this.facebook.logout().then(res => {
     console.log('res: ', res);
     });
   }
   getUserDetail(userid: any) {
    this.facebook.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);
        this.auth.loginFacebook(res).subscribe(respon => {
          if(respon){
            this.router.navigate(['home']);
          }
        });
        // this.userFacebook = res;
      }).catch(e => {
        console.log(e);
      });
  }

}
