import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.css']
})
export class AvisoLegalComponent implements OnInit{

  responsable: string = "restaurante";
  domicilio: string = "Avenida Aurelio Cabrera, 9, Alburquerque (Badajoz)";
  nif: string = "";
  email: string = "info@restaurante.com";
  telefono: string = "+34 6XX XXX XXX";

  constructor() { }

  ngOnInit(): void {
  }

}
