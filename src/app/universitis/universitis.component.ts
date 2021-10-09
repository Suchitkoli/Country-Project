import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { universityData } from '../Model/university.model';
import { UniversitydataService } from '../services/universitydata.service';

@Component({
  selector: 'app-universitis',
  templateUrl: './universitis.component.html',
  styleUrls: ['./universitis.component.css']
})

export class UniversitisComponent implements OnInit
{   
  public countryCode:string | null | undefined;
  public spinner=true;
  public Info:Array<universityData>=new Array();
 
  constructor(
    private activatedRoute: ActivatedRoute,private universities:UniversitydataService) { 

    }
  ngOnInit() 
  {
    this.activatedRoute.paramMap.subscribe(param =>
    {
      const countryName=param.get('country');
      this.countryCode=countryName;
      this.universities.getuniversities(countryName).subscribe(response=>
        {
        for(let i of response as [])
          {
            this.Info.push(i);
          }
        });
    });
    setTimeout(()=>
    {
      this.spinner=false;
    },3000);
  }
}
