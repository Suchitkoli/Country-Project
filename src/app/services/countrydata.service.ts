import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {

  url='https://api.first.org/data/v1/countries'

  constructor(private httpclient:HttpClient) { }

  getcountry(){
  
      return this.httpclient.get(this.url)
    
      
  }
}
