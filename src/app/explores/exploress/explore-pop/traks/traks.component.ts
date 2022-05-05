import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-traks',
  templateUrl: './traks.component.html',
  styleUrls: ['./traks.component.scss']
})
export class TraksComponent implements OnInit {
  assetStatus: City[];
  assetStatus1: City[];
  assetStatus2: City[];

  constructor() {
    this.assetStatus = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }];
    this.assetStatus1 = [];
    this.assetStatus2 = []
  }

  ngOnInit(): void {
  }

}