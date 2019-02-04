import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component'
import { LtRepairComponent } from './repairslt/repairslt.component';
import { RepairsComponent } from './repairs/repairs.component';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { IssuesComponent } from './issues/issues.component'
import { DropDownComponent } from './drop-down/drop-down.component'
const routes: Routes = [
  
  { path: '*', redirectTo:'signup'},
  {path: '', component: IssuesComponent},
  {path: 'issue', component: IssuesComponent},
  {path :'signout', component: DropDownComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component:LoginComponent},
  { path: 'otp', component: OtpComponent} ,
  { path: 'order', component: OrderComponent },
  { path: 'repairs', component: RepairsComponent },
  { path: 'lt-repair', component: LtRepairComponent }
  //{ path: 'login', component: Login},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
