
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CountrydataService } from '../services/countrydata.service';
import {RootObject} from '../Model/country.model'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  selectedValue!:string

  country=<RootObject>{}
  countryFinal:Array <RootObject>=new Array()
  dataInfo:Array <RootObject>=new Array()
  control = new FormControl();
  filteredStreets!: Observable<string[]>;


  constructor(private countries:CountrydataService ,private router:Router) { }
 


  ngOnInit(): void {
    
  //Fetching countries

  this.countries.getcountry().subscribe((res:any)=>{
    console.log("country Data::-", res)
    
    this.country=res
    this.countryFinal.push(this.country)

    console.log("Country",this.countryFinal)
    for(let i of this.countryFinal)
    {
      console.log("For data",i.data)
    for(let j of Object.entries ( i.data).map(([name,value])=>({name,value})))
    {
      // console.log("Enteries",j.value.country)
      this.dataInfo.push(j.value.country)
    } 
  }
  console.log("DataInfo",this.dataInfo)
   })
   this.filteredStreets = this.control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );

  }
  private _filter(value: any): any {
    const filterValue = this._normalizeValue(value);
    return this.dataInfo.filter(city => this._normalizeValue(city).includes(filterValue));
  }
  private _normalizeValue(value: any) {
    return value.toLowerCase().replace(/\s/g, '');
  }
 
  countrycode!:string
  getcountry(selectedValue:string){
  console.log("Value",selectedValue)
  this.countrycode=selectedValue
   this.router.navigate(['universitis',this.countrycode])

  }
}
function value(arg0: void, value: any): any {
  throw new Error('Function not implemented.');
}

