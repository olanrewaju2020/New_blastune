import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  show:boolean=false
  displayBasic: boolean | undefined;
  visibleSidebar2: boolean = false
  color: string = "back";
  assetStatus: City[];
  constructor(private router: Router) {
    this.assetStatus = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }];
  }



  ngOnInit() {
    this.shows()
  }

  showBasicDialog() {
    this.displayBasic = true;
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
