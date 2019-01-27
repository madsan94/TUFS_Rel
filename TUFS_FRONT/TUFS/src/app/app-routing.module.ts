import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';
import { LtRepairComponent } from './repairslt/repairslt.component';
import { RepairsComponent } from './repairs/repairs.component';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
const routes: Routes = [
  
  { path: '*', redirectTo:'signup'},
  { path: '', component: SignupComponent },
  { path: 'login', component:LoginComponent},
  { path: 'otp', component: OtpComponent} ,
  { path: 'tiles', component: TilesComponent },
  { path: 'repairs', component: RepairsComponent },
  { path: 'lt-repair', component: LtRepairComponent }
  //{ path: 'login', component: Login},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
