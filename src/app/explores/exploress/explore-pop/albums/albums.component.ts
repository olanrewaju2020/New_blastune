import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  assetStatus: City[];
  assetStatus1: City[];
  assetStatus2: City[];
  items: MenuItem[];
  constructor() {
    this.assetStatus = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }];
    this.assetStatus1 = [];
    this.assetStatus2 = []
    this.items = [];
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Add Favourite', icon: 'pi pi-fw pi-heart', },
      { separator: true },
      { label: 'Free Download', icon: 'pi pi-fw pi-download' }
    ];
  }

}
