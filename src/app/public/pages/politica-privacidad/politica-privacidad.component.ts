import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.css']
})
export class PoliticaPrivacidadComponent implements OnInit {

  responsable: string = "restaurante";
  domicilio: string = "Plaza Mayor, 28. Plasencia (Cáceres)";
  nif: string = "";
  email: string = "info@restaurante.com";
  telefono: string = "+34 6XX XXX XXX";

  constructor() { }

  ngOnInit(): void {
  }

}
