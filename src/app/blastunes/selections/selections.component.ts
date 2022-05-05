import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
 
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss']
})
export class SelectionsComponent implements OnInit {
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
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
}
