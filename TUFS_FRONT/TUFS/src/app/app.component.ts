import { Component, Injectable } from '@angular/core';
import { RestService } from './rest.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestService]
})
@Injectable()
export class AppComponent {
  title = 'TUFS';
  
  constructor(private restservice:RestService){

  }

}
