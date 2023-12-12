import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: Router){}

  purgadores(){
    this.route.navigate(['purgadores']);
  }
  redutoras(){
    this.route.navigate(['redutora']);
  }
  moduladora(){
    this.route.navigate(['controle']);
  }
  seguranca(){
    this.route.navigate(['seguranca']);
  }
  filtro(){
    this.route.navigate(['filtro']);
  }
  consumo(){
    this.route.navigate(['consumo']);
  }
  bomba(){
    this.route.navigate(['bomba']);
  }
  flash(){
    this.route.navigate(['flash']);
  }
  vaporSaturado(){
    this.route.navigate(['tabela']);
  }


}
