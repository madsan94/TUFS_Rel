import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RestService } from '../rest.service'
import { otp } from './otp'
import { otpV } from './otpV'
import { Router } from '@angular/router'
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  providers:[RestService],
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
form;
form_otp;
number:any;
  constructor(private restservice:RestService, private router:Router) { }
flag:boolean=true;
  ngOnInit() {
    this.form =new FormGroup({
      number: new FormControl('+91')
    }
    )
    this.form_otp =new FormGroup({
      otp: new FormControl(' ')
    }
    )    

  }

GenerateOTP(data){
//console.log(data.number)
const newotp:any={number:data.number};
this.number=data.number 
this.restservice.SendOtp(newotp).subscribe(response => {
if(response.flag=='s'){
this.flag=false;
}
})
}

public VerifyOTP(data){
const otp_v:any={number:this.number,otp:data.otp};
this.restservice.VerifyOtp(otp_v).subscribe(response =>{
  console.log(response)
  if(response.flag=='s'){
    this.router.navigateByUrl('/order')
  }
  else{
    alert("Wrong OTP")
  }
})


}


}
