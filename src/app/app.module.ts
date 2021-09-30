import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { UniversitisComponent } from './universitis/universitis.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    UniversitisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'Country-List',pathMatch:'full'},
      {path:'Country-List',component:CountryComponent},
      {path:'universitis/:country',component:UniversitisComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MatTableModule,MatSelectModule, MatInputModule,FormsModule,MatCardModule,MatExpansionModule,MatGridListModule,MatAutocompleteModule,ReactiveFormsModule]
})
export class AppModule { }
