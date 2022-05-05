import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  displayBasic: boolean | undefined;
  myimage: string = "https://cdn.wallpapersafari.com/89/10/wOxyip.jpg"
  bg: string = 'https://store-images.s-microsoft.com/image/apps.53839.13639089882814807.eaef6f1f-2e30-4a6b-873b-f6f895589ea3.bff30103-7d1f-45e1-bc73-414f492083b4?mode=scale&q=90&h=1080&w=1920'
  constructor() { }

  ngOnInit(): void {
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
}
