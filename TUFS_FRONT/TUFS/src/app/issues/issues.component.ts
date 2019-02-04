import { Component, OnInit, Injectable } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RestService} from '../rest.service'
//import { issue } from './issue'
//import { models } from './issue'
import { GrdFilterPipe } from '../grd-filter.pipe';
import { Router } from '@angular/router'
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
          query('.models', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ])
    ])

  ]
})
@Injectable()
export class IssuesComponent implements OnInit {
  public searchText:any;
  public data:any;
  public issue:any;
  public model:any;
  public price:any="200";
items=[];
items_m=[];
flag:boolean=true;
flag_model:boolean=false;
flag_price:boolean=false;

  constructor(private restservice:RestService,private router:Router) {
  


   // const Newissue:issue={"device":this.s,"models":'',"ii":{"model":''}} as issue
const models:any={"device":"Laptop"}
    this.restservice.GetIssues(models).subscribe(response => {
      this.searchText=response.issues.model[0];
      this.searchText=response.issues.model[1];
      this.searchText=response.issues.model[0];
for (let entry of response.issues.model) {
    var inner_entry={issue:entry}
    
    this.items.push(inner_entry); // 1, "string", false
  }
 var cut=""; 
for (let entry of response.models) {
  if(entry !=','){
    cut=cut+entry
  }
  else{
  let inner_entry={model:cut}
  this.items_m.push(inner_entry);
  cut=""; // 1, "string", false

}
}
console.log(this.items_m)
      
    })
    
  }

  ngOnInit() {
    localStorage.setItem('price', this.price)
   

  }
ShowModels(i)
{

  
var issue=this.items[i]
this.flag_model=true;
this.flag=false;
localStorage.setItem('issue', this.items[i].issue);
this.issue=localStorage.getItem('issue')

}


ShowPrice(i)
{
  this.flag_model=false;
  
  localStorage.setItem('model', this.items_m[i].model);
  this.model=(localStorage.getItem('model'))
  this.price=localStorage.getItem('price')
  this.router.navigateByUrl('order')
}

PlaceOrder(){
  this.router.navigateByUrl('/login')
}


}
