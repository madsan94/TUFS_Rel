import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from "angular-6-social-login";
//import {MatFormFieldModule} from '@angular/material/form-field';
import { GrdFilterPipe } from './grd-filter.pipe';




import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher,
  MatTabsModule
      
} from '@angular/material';      
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';      
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LtRepairComponent } from './repairslt/repairslt.component';
import { RepairsComponent } from './repairs/repairs.component';
import { TilesComponent } from './tiles/tiles.component';
import { OtpComponent } from './otp/otp.component';
import { TabviewComponent } from './tabview/tabview.component';
import { SignupComponent } from './signup/signup.component';
import { OrderComponent } from './order/order.component';
import { IssuesComponent } from './issues/issues.component';
import { ModelsShowComponent } from './models-show/models-show.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { NavbarComponent } from './navbar/navbar.component';

//Config
export function getAuthServiceConfigs(){
  let config =new AuthServiceConfig(
    [
      {
        id:FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("2266154740307860")
      },
      {
        id:GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("972655024778-o2h06mqd4v4si6kns73h6o2v41bsmbob.apps.googleusercontent.com")
      }
    ]
  )
  return config;
}

entryComponents:[];
@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    LoginComponent,
    RepairsComponent,
    LtRepairComponent,
    TilesComponent,
    OtpComponent,
    TabviewComponent,
    SignupComponent,
    OrderComponent,
    IssuesComponent,
    ModelsShowComponent,
    GrdFilterPipe,
    ConfirmOrderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    MatTabsModule
  ],
  exports:[
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:AuthServiceConfig,
      useFactory:getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  
})
export class AppModule {


}


