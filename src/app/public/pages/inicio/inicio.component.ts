import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/interfaces/restaurante.interface';
import { PlatosService } from '../../../services/platos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  constructor(private platosService: PlatosService) {}

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }

  nombreRestaurante: string = "Restaurante Amore Mio";
  nombreRestauranteResponsive: string = "restaurante\nCafé Comidas";
  localizacion: string = "Plasencia (Cáceres)"

  descripcionTitulo: string = "Restaurante Amore Mio";
  descripcionSubtitulo: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";
  descripcionTexto: string [] = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus orci erat, sed interdum enim consectetur ut. Integer eu turpis dignissim, porttitor risus ac, placerat nibh.",
      "Duis tincidunt neque ex, et euismod ante vehicula ut. Suspendisse bibendum rutrum elementum. Curabitur commodo commodo pretium. Vivamus in porta nulla, " + 
      "eu ultrices metus. Nulla convallis mollis imperdiet. Cras id lacus non turpis cursus dapibus feugiat vestibulum lorem. Vivamus condimentum tortor eu faucibus cursus.",
      "Maecenas ac dolor eu purus porttitor dapibus et vitae leo. Sed eget accumsan neque, porttitor viverra magna. Interdum et malesuada fames ac ante ipsum primis in faucibus." 
    + "Duis a nulla eget leo laoreet porttitor in eu arcu. Maecenas sapien dui, tincidunt a efficitur at, vestibulum at justo. Nunc ut condimentum ligula, non convallis urna. "
    + "Duis aliquam, diam vitae faucibus placerat, elit tellus aliquam nibh, sit amet porta tortor erat ut metus."
  ];  

  tituloFavoritosChef: string = "Nuestras sugerencias";
  
  pathAssets: string = "../../../assets/";

  vPlatos: Plato[] = this.platosService.getFavoritosChef();
  
}
