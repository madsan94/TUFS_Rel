import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RestService } from '../rest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { UserL } from './login'
import {MatFormFieldModule} from '@angular/material/form-field';
import{ AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angular-6-social-login"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ RestService ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private restservice: RestService,private socialAuthService: AuthService,private route:ActivatedRoute,private router:Router) { }
  





ngOnInit() {
this.form=new FormGroup({

  email:new FormControl('',Validators.compose([
    //Validators.pattern('\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b'),
    Validators.required])),
  password: new FormControl('',Validators.compose([
    //Validators.pattern('[?=.*[A-Z]]')
    //Validators.pattern('(?=.*[0-9])')
  ]))
  
  });
  }

onSubmit(signup_details){
  const NewUser: any = { "email":signup_details.email,"password":signup_details.password }; 
  this.restservice.Login(NewUser).subscribe(response =>{
if(response.flag=='s'){
    alert("Login Successful")
    localStorage.setItem('session',JSON.stringify(response.session))
    this.router.navigateByUrl('/confirm_order')
}
else{
  alert("Wrong Login Details");
}
  })   //this.router.navigateByUrl('/tiles')
}

public socialSignIn(socialPlatform : string) {
  let socialPlatformProvider;
  if(socialPlatform == "facebook"){
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  }
  else{
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  }
  
  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
      console.log(socialPlatform+" sign in data : " , userData);
      // Now sign-in with userData
      // ...
          
    }
  );
}

public otp(){
  this.router.navigateByUrl('/otp')
}

public signup(){
  this.router.navigateByUrl('/signup')

}
}
