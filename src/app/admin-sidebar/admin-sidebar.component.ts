import { Component, OnInit } from '@angular/core';


interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  assetStatus: City[];
  show:boolean=false
  constructor() { 
    this.assetStatus=[ 
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}];
  }
  ngOnInit(): void {
    this.shows()
  }
  shows(){
    // if(this.show){
    //   this.show=true;
    // }else{
    //   this.show=false
    // }
    this.show = !this.show;
    // this.show=true

  }
}
