import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-exploress',
  templateUrl: './exploress.component.html',
  styleUrls: ['./exploress.component.scss']
})
export class ExploressComponent implements OnInit {
  items: MenuItem[];
  constructor() { 
    this.items = [];
  }

  ngOnInit(): void {
    this.items=[
      {label:'Add Favourite', icon:'pi pi-fw pi-heart',},
      { separator:true},
      {  label:'Free Download', icon:'pi pi-fw pi-download'}
    ];
  }

}
