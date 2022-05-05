import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];
  constructor() { 
    this.items = [];
  }

  ngOnInit(): void {
    this.items=[
      {label:'View', icon:'pi pi-fw pi-eye',},
      { separator:true},
      {  label:'Delete', icon:'pi pi-fw pi-trash'},
      {  label:'Edit', icon:'pi pi-fw pi-pencil'},
      {  label:'Print', icon:'pi pi-fw pi-print'},
      {  label:' Download', icon:'pi pi-fw pi-download'}
    ];
  }
}
