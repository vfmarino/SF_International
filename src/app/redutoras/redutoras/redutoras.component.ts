import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redutoras',
  templateUrl: './redutoras.component.html',
  styleUrls: ['./redutoras.component.css']
})
export class RedutorasComponent {
    constructor(private route: Router){}

    acaoDireta(){
      this.route.navigate(['acaoDireta']);
    }

    autoOperada(){
      this.route.navigate(['autoOperada']);
    }
}
