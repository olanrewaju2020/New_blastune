import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
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
