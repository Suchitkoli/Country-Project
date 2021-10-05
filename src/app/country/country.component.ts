
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CountrydataService } from '../services/countrydata.service';
export interface Data{
  country:string
   region:string
}

export interface Object{
  data:Data
}



 interface country{
   country:string
   region:string
 
}
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  selectedValue!:string
  constructor(private countries:CountrydataService ,private router:Router) { }
  country=<Object>{}
  maindata:Array <any>=new Array()
  dataInfo:any
  dataManage:any
  countryname:Array <country>=new Array()
  mappedData:Array <any>=new Array()
  mapped:Array <any>=new Array()
  control = new FormControl();
  filteredStreets!: Observable<string[]>;
  countrydata:Array <any>=new Array()

  ngOnInit(): void {
    
  //Fetching countries

  this.countries.getcountry().subscribe((data:any)=>{
    console.log("country Data::-", data)
    
    this.country=data
    
    for(let i of this.country['data'])
    {
      console.log("For Loop ::-",i.data)
      this.dataInfo=i.data
      console.log("For Loop Data info ::-",this.dataInfo)
   }
   
   this.mapped = Object.entries(this.dataInfo).map(([name, value ]) => ({name, value}));
   console.log("Mapped Value",this.mapped)
  for(let i of this.mapped){
    
    this.mappedData= Object.entries(i.value).map(([ value ]) => ({ value}));
    this.countryname.push(i.value)
  }

  console.log("country name",this.countryname);

   for(let j of Object.keys(this.dataInfo)){
     var capial=this.dataInfo[j]
    //  console.log("Value of j",capial.country)
    this.countrydata.push(capial.country)
     this.maindata.push(capial.country)
   }
console.log("Main data",this.countrydata)
   })
   this.filteredStreets = this.control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );

  }
  private _filter(value: any): any {
    const filterValue = this._normalizeValue(value);
    return this.countrydata.filter(city => this._normalizeValue(city).includes(filterValue));
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
