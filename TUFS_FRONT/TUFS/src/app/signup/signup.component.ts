import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RestService } from '../rest.service'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from './signup'
import {MatFormFieldModule} from '@angular/material/form-field';
import{ AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angular-6-social-login"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [ RestService ],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private restservice: RestService,private socialAuthService: AuthService,private route:ActivatedRoute,private router:Router) { }
  
ngOnInit() {
this.form=new FormGroup({
  name: new FormControl('',Validators.compose([
    Validators.pattern('[\\w\\-\\s\\/]+'),
    Validators.required
])),
  email:new FormControl('',Validators.compose([
    //Validators.pattern('\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b'),
    Validators.required])),
  password: new FormControl('',Validators.compose([
    //Validators.pattern('[?=.*[A-Z]]')
    //Validators.pattern('(?=.*[0-9])')
  ])),
  confirm_password: new FormControl('')
  });
  }

onSubmit(signup_details){
  const NewUser: User = { "email":signup_details.email,"password":signup_details.password } as User;
  this.restservice.Signup(NewUser).subscribe(response =>{ 
    if(response.flag=='s'){
      this.router.navigateByUrl('/tiles')
     // console.log(response.session)
      this.restservice.SetSession(response.session)
    }
    else{
      console.log(response.message)
    }
  })
  //this.router.navigateByUrl('/tiles')
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
}
