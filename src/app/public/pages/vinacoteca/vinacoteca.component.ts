import { Component, OnInit } from '@angular/core';
import { VinacotecaService } from '../../../services/vinacoteca.service';
import { Vino } from '../../../interfaces/restaurante.interface';

@Component({
  selector: 'app-vinacoteca',
  templateUrl: './vinacoteca.component.html',
  styleUrls: ['./vinacoteca.component.css']
})
export class VinacotecaComponent implements OnInit {

  vEncinaBlanca: Vino[] = this.vinacotecaService.getBodegaEncinaBlanca();
  vExtremadura: Vino[] = this.vinacotecaService.getExtremadura();
  vRiberaDuero: Vino[] = this.vinacotecaService.getRiberaDelDuero();
  vRioja: Vino[] = this.vinacotecaService.getRioja();
  vOtrasDenominaciones: Vino[] = this.vinacotecaService.getOtrasDenominaciones();
  vBlancosVerdejosAlbarinnos: Vino[] = this.vinacotecaService.getBlancosVerdejosAlbarinnos();
  vEspumososSobremesa: Vino[] = this.vinacotecaService.getEspumososSobremesa();
  vPaseante: Vino[] = this.vinacotecaService.getVinosDelPaseante();

  tEncinaBlanca: string = "Bodega Encina Blanca de Alburquerque";
  tExtremadura: string = "Extremadura";
  tRiberaDuero: string = "Ribera del Duero";
  tRioja: string = "Rioja";
  tOtrasDenominaciones: string = "Otras Denominaciones";
  tBlancosVerdejosAlbarinnos: string = "Blancos / Verdejos / Albariños";
  tEspumososSobremesa: string = "Vinos Espumosos y Sobremesa";
  tPaseante: string = "Vinos del Paseante";

  constructor(private vinacotecaService: VinacotecaService) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }

}
