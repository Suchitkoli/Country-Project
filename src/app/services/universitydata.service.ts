import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { universityData } from '../Model/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversitydataService {

  constructor(private httpclient:HttpClient) { }
  
  getuniversities(pas:string|null){
  const  universitiesUrl=`http://universities.hipolabs.com/search?country=`
    const url:string=(universitiesUrl+pas)
      return this.httpclient.get(url)
  }
}
