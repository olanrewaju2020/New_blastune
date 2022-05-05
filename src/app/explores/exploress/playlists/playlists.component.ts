import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

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
