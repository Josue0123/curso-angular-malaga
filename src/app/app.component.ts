import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title : string;
  input : string = "la loca";
  link : string;

  constructor(){
    this.title = "Curso de angular by Malaganator";
  }

  hola(){
    console.log(this.input = "Holaa");
  }

  ponerImagen(event){
    console.log(event);
    this.link = event;
  }

  ngOnInit(){

  }
}
