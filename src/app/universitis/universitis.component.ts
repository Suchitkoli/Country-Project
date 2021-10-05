import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UniversitydataService } from '../services/universitydata.service';


export interface universityData{
  country:string;
  name:string;
  domains:[string];
  alpha_two_code:string;
  web_pages:[string];
}

@Component({
  selector: 'app-universitis',
  templateUrl: './universitis.component.html',
  styleUrls: ['./universitis.component.css']
})
export class UniversitisComponent implements OnInit {
  countryCode: any;
  spinner=true
  university!:universityData[]
  Info:Array<universityData>=new Array()
  constructor(private activatedRoute: ActivatedRoute,private universities:UniversitydataService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param =>{
      this.countryCode=param.get('country')
    });
    this.universities.getuniversities(this.countryCode).subscribe(response =>{
      console.log("All information", response)
      this.university=response as []
      for(let i of this.university){
          this.Info.push(i)
      }
      console.log("College Name::-",this.Info)
    

    })
    setTimeout(()=>{
      this.spinner=false
    },5000)
   
   

  }



}
