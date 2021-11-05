import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';



@Component({
  selector: 'app-componentservicio',
  templateUrl: './componentservicio.component.html',
  styleUrls: ['./componentservicio.component.css']
})
export class ComponentservicioComponent implements OnInit {


  constructor(private http:HttpClient ) {
    
   }
 

  rta: [];
  conversion: any;
  rta1: [];
  conversion1: any;
  rta2: [];
  conversion2: any;
  objeto:{};
  url1="https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";
  url2="https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0";
  url3="https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0";
  urln=" ";
  transforms: any;
  states = [
    {
      Name:'Select your news',
      Img: ' ',
      urlx: ' '
     },
    {
    Name:'Angular',
    Img: '../../../assets/img/image-138.png',
    urlx: 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0'
   },
   {
    Name:'Reacts',
    Img: '../../../assets/img/image-140.png',
    urlx: 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0'
   },
   {
    Name:'Vuejs',
    Img: '../../../assets/img/image-141.png',
    urlx: 'https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0'
   }
 ];
 

  fecha: Date= new Date();
  oneday = 24 * 60 * 60 ;
  ngOnInit() {
    
    this.http.get(this.url1)
    .subscribe(data =>{
     this.conversion=data;
     this.rta=this.conversion.hits;
     
     
    
    
     console.log('prueba: ', this.rta);
     
    });
    this.http.get(this.url2)
    .subscribe(data =>{
     this.conversion1=data;
     this.rta1=this.conversion1.hits;
     
     console.log('prueba1: ', this.rta1);
   
    });
    this.http.get(this.url3)
    .subscribe(data =>{
     this.conversion2=data;
     this.rta2=this.conversion2.hits;
    
     console.log('prueba2: ', this.rta2);
   
    });
  }

 
  Angular(state){
      console.log(state.Name);
       this.urln=" ";
      if(state.Name == "Angular"){
         this.urln=this.url1;
         console.log('urln: ', this.urln);
         console.log(this.rta);
        
      }
      if(state.Name == "Reacts"){
        this.urln=this.url2;
        console.log('urln: ', this.urln);
         console.log(this.rta1);
     }
     if(state.Name == "Vuejs"){
      this.urln=this.url3;
      console.log('urln: ', this.urln);
      console.log(this.rta2);
     }
     console.log('urln: ', this.urln);
    
    }

    abrirLink(url: string){
     
        window.open(url, "_blank");
     }
      imagen1="../../../assets/img/iconmonstr-favorite-2.png";
      imagen2="../../../assets/img/iconmonstr-favorite-3.png";
      imagen= this.imagen1;
     changue(){
       if(this.imagen==this.imagen1){
            this.imagen=this.imagen2;
            console.log('imagen1');
       }else{
           this.imagen=this.imagen1;
           console.log('imagen2');
       }
       console.log(this.imagen);
     }



   

}
