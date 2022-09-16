import { Component, HostListener, OnInit } from '@angular/core';
import { Plato } from 'src/app/interfaces/restaurante.interface';
import { PlatosService } from '../../../services/platos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private platosService: PlatosService) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }

  tituloEntrantes: string = "Entrantes";
  tituloCarnes: string = "Carnes";
  tituloArroces: string = "Arroces";
  tituloPescados: string = "Pescados";
  tituloPostres: string = "Postres";
  vSecciones: string[] = [
    this.tituloEntrantes,
    this.tituloCarnes,
    this.tituloArroces,
    this.tituloPescados,
    this.tituloPostres,
  ]

  tituloSeleccionado: string = "Entrantes";

  vEntrantes:Plato[] = this.platosService.getEntrantes();
  vCarnes: Plato[] = this.platosService.getCarnes();
  vArroces: Plato[] = this.platosService.getArroces();
  vPescados: Plato[] = this.platosService.getPescados();
  vPostres: Plato[] = this.platosService.getPostres();


  responsive: boolean = window.innerWidth < 959;
  scrollable: boolean = (!this.responsive ? (window.pageXOffset < 300 ? false : true) : true);


  // Evento para el scroll
  @HostListener("window:scroll", ['$event'])
  hacerScrollable(event: Event) {
    this.responsive = window.innerWidth < 959;

    if (!this.responsive) {
      if (window.pageYOffset < 300) {
        this.scrollable = false;
      } else {
        this.scrollable = true;
      }
    } else {
      this.scrollable = true;
    }
  }
}
