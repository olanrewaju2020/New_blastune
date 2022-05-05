import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-hot-select',
  templateUrl: './hot-select.component.html',
  styleUrls: ['./hot-select.component.scss']
})
export class HotSelectComponent implements OnInit {
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
