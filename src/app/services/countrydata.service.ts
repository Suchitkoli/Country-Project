import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from '../Model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {
  constructor(private httpclient:HttpClient) { }
  getcountry()
  {
      const url='https://api.first.org/data/v1/countries'
        return this.httpclient.get<RootObject>(url)   
  }
}
