import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RestService } from '../rest.service'
import { otp } from './otp'
import { otpV } from './otpV'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  providers:[RestService],
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
form_otp:FormGroup
  constructor(private restservice:RestService) { }

  ngOnInit() {
    this.form_otp =new FormGroup({
      number: new FormControl('+91')
    }
    )

  }

public GenerateOTP(data){
//console.log(data.number)
const newotp:otp={number:data.number}; 
this.restservice.SendOtp(newotp).subscribe(response => console.log(response))
}


}
