import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;

  cities: City[];

  selectedCity1!: City;

  selectedCity2!: City;

  selectedCity3!: string;

  selectedCountry!: string;

 

  item!: string;

 
constructor() {
  this.items = [];
  for (let i = 0; i < 10000; i++) {
      // this.items.push({label: 'Item ' + i, value: 'Item ' + i});
  }

  this.cities = [
      {name: 'POPULAR COMMENTS', code: 'PC'},
      {name: 'LATEST COMMENTS', code: 'LC'}
      
  ];

  

 
 }
  ngOnInit(): void {
  }

}
