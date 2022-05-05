import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-music-detail-header',
  templateUrl: './music-detail-header.component.html',
  styleUrls: ['./music-detail-header.component.scss']
})
export class MusicDetailHeaderComponent implements OnInit {
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
