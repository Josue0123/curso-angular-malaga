import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.styl']
})
export class HijoComponent implements OnInit {

  @Input() archivo : string;
  @Output() url = new EventEmitter<string>();

  constructor() { 
    console.log(this.archivo);
  }

  subirArchivo(){
    console.log("subiendo archivo...");
    this.url.emit(this.archivo);
  }

  ngOnInit() {
    console.log(this.archivo);
  }

}
