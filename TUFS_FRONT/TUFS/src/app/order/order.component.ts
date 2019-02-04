import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

public issue:any;
public model:any;
public price:any


  constructor(private router:Router) { }

  ngOnInit() {
this.issue=localStorage.getItem('issue');
this.model=localStorage.getItem('model');
this.price=localStorage.getItem('price');

  }

  PlaceOrder(){
    if(!localStorage.getItem('session')){
this.router.navigateByUrl('login')
    }
  }
}


