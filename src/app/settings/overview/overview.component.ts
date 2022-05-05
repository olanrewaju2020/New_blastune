import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  cities: any[];
  value8: any;
  
  constructor() { 
    this.cities = [
      { name: "Popular comments "},
      { name: "latest comments"},
    ];
  }

  ngOnInit(): void {
  }

}
