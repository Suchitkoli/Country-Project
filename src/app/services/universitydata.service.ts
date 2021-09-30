import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversitydataService {
  universitiesUrl:string='http://universities.hipolabs.com/search?country='
  url!:string;
  constructor(private httpclient:HttpClient) { }

  getuniversities(pas:string){
    this.url=(this.universitiesUrl+pas)
    return this.httpclient.get(this.url)

  }
}
