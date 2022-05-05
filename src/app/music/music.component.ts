import { Component, OnInit } from '@angular/core';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})

export class MusicComponent implements OnInit {
  assetStatus: City[];
  constructor() {
   
  this.assetStatus=[ 
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}];
 
   }

  ngOnInit(): void {
   
  }

}
