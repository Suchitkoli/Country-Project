
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountrydataService } from '../services/countrydata.service';
import {RootObject} from '../Model/country.model'
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  
   private country=<RootObject>{}
   private countryFinal:Array <RootObject>=new Array()
   public dataInfo:Array <RootObject>=new Array()
   
    constructor(
        private countries:CountrydataService ,private router:Router) {
          
        }
    ngOnInit(): void {
        //Fetching countries
        this.countries.getcountry().subscribe((res:RootObject)=>{
            this.country=res;
            this.countryFinal.push(this.country);
            for(let i of this.countryFinal){
                for(let j of Object.entries ( i.data).map(([name,value])=>({name,value}))){
                  this.dataInfo.push(j.value.country);
            } 
          }
       });
    }
    getcountry(selectedValue:RootObject){
        this.router.navigate(['universitis',selectedValue])
    }
}


