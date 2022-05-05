import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  cities: any[];
  value8: any;

  constructor() {
    this.cities = [
      { name: "Tracks" },
      { name: "Albums" },
      { name: "Artists" },
      { name: "Playlist" },
      { name: "User" }
    ];
  }

  ngOnInit(): void {
  }

}
