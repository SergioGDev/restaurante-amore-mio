import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-cookies',
  templateUrl: './politica-cookies.component.html',
  styleUrls: ['./politica-cookies.component.css']
})
export class PoliticaCookiesComponent implements OnInit {

  responsable: string = "restaurante";
  domicilio: string = "Plaza Mayor, 28. Plasencia (Cáceres)";
  nif: string = "";
  email: string = "info@restaurante.com";
  telefono: string = "+34 6XX XXX XXX";

  constructor() { }

  ngOnInit(): void {
  }

}
