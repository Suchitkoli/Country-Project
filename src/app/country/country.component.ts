
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountrydataService } from '../services/countrydata.service';
import {RootObject} from '../Model/country.model'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit
 {

    private country:Array <RootObject>=new Array();
    public countryList:Array <RootObject>=new Array();
   
    constructor(
        private countries:CountrydataService ,private router:Router) {

        }

    ngOnInit(): void 
    {
        //Fetching countries
        this.countries.getcountry().subscribe((res:RootObject)=>
        {
            this.country.push(res);
            //Iteration of country name
            for(let i of this.country)
            {
                for(let j of Object.entries (i.data).map(([name,value])=>
                ({name,value})))
                {
                  this.countryList.push(j.value.country);
                } 
            }
         });
    }
    //Routing data to another component
    getcountry(countryName:RootObject)
    {
        this.router.navigate(['universitis',countryName]);
    }
}


