import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
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
