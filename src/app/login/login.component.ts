import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  displayBasic: boolean | undefined;
  
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

   
}
