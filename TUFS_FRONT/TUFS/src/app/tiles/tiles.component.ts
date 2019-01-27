import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{ RestService } from '../rest.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  tilesForm: FormGroup;
  session:Object;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private restservice: RestService) { }

  ngOnInit() {
    

  }

getdata(){
  this.session=this.restservice.GetSession();
  console.log(this.session)
}
  onMbSubmit() {

    this.router.navigateByUrl('/repairs')
  }

  onLtSubmit() {

    this.router.navigateByUrl('/lt-repair')
  }
}