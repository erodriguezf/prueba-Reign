import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-componentservicio',
  templateUrl: './componentservicio.component.html',
  styleUrls: ['./componentservicio.component.css']
})
export class ComponentservicioComponent implements OnInit {
  rta: [];
  conversion: any;
  objeto:{};
  constructor(private http:HttpClient ) { }

  ngOnInit() {
    this.http.get('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
    .subscribe(data =>{
     this.conversion=data;
     this.rta=this.conversion.hits;
     //this.rta=this.objeto;
     console.log('prueba: ', this.rta);
     
    });

  }

}
