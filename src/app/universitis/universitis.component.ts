import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UniversitydataService } from '../services/universitydata.service';

export interface university{
  country:string
  name:string
  stateProvince:string
  alpha_two_code:string
  domains:string[]
  web_pages:string[]
}



@Component({
  selector: 'app-universitis',
  templateUrl: './universitis.component.html',
  styleUrls: ['./universitis.component.css']
})
export class UniversitisComponent implements OnInit {
  countrycode: any;

  university:Array<any>=new Array()
  Info:Array<university>=new Array()
  constructor(private activatedRoute: ActivatedRoute,private universities:UniversitydataService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param =>{
      this.countrycode=param.get('country')
    });

    this.universities.getuniversities(this.countrycode).subscribe(response =>{
      console.log("All information", response)
       
      this.university.push(response)
      
      for(let i of this.university){
        
        for(let j of i){
          console.log("Name::--",j.domains)
        
        
          this.Info.push(j)
         
        }
      }
      console.log("College Name::-",this.Info)
    

    })
   
    //fetching data of this.countrycode

  }



  //  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //  dataSource =new MatTableDataSource( ELEMENT_DATA);

}
