import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { GadgetsService } from '../gadgets.service';
import { Mobile } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lt-repair',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
export class RepairsComponent implements OnInit {
  fclaptop = new FormControl('');
  laptop: Mobile;
  laptops: Mobile[] = [];
  fcdevice = new FormControl('');
  laptopForm: FormGroup;
  options: string[] = [
    "LENOVO",
    "HP",
    "DELL",
    "APPLE",
    "ASUS",
    "ACER",
    "HCL",
    "IBM",
    "GOOGLE",
    "IBALL",
    "RDP",
    "GIGABYTE",
    "LG",
    "MICROMAX",
    "MICROSOFT",
    "SAMSUNG",
    "VAIO",
    "XIAOMI",
    "COMPAQ",
    "WIPRO"
  ];
  filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, public gadgetservice: GadgetsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.getlaptops();
    this.laptopForm = this.fb.group({
      fclaptop: [null],
      fcdevice: [null]
    });

    this.filteredOptions = this.laptopForm.get('fclaptop').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterLaptops(value))
    );

  }

  getlaptops() {
    this.gadgetservice.getlaptops()
      .subscribe((laptops) => {
          console.log(laptops)
          this.laptops = laptops;
          this.laptopForm.get('fclaptop').setValue('');
      });
  }

  private _filterLaptops(value: any): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  OnLtSubmit(){
    this.fclaptop = this.laptopForm.value.fclaptop;
    this.fcdevice = this.laptopForm.value.fcdevice;
    alert("The Laptop Issues has been sent successfully");
  }
  
}