import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from './signup/signup'
import { HttpErrorHandler, HandleError } from './http-error-handler.service'
import { LoginComponent } from './login/login.component';
import { UserL } from './login/login'
import { otp } from './otp/otp';
import { otpV } from './otp/otpV';
import { Model } from './repairs/model'
import { order } from './order/order'
import { BehaviorSubject } from 'rxjs';

const endpoint = 'http://localhost:8000/'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
@Injectable({
  providedIn: 'root'
})
export class RestService {
  
session:Object;
  constructor(private http: HttpClient) 
    {
      
    }

Signup(user:User): Observable<User> {
  return this.http.post<User>(endpoint + 'signup',user,httpOptions)
}



Login(user:UserL):Observable<UserL>{
  return this.http.post<UserL>(endpoint+'login',user,httpOptions)
}

SendOtp(otp:otp):Observable<otp>{
  return this.http.post<otp>(endpoint+'send_otp',otp,httpOptions)
}

VerifyOtp(otp:otpV):Observable<otpV>{
  return this.http.post<otpV>(endpoint+'verify_otp',otp,httpOptions)
}

GetModels(model:Model):Observable<Model>{
  return this.http.post<Model>(endpoint+'models',model,httpOptions)
}

PlaceOrder(order:order):Observable<order>{
  return this.http.post<order>(endpoint+'orders',order,httpOptions)
}

GetSession(){
  return this.session
}

SetSession(data:any){
  console.log(data)
this.session=data
}

}



