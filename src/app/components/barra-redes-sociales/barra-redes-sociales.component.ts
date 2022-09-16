import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/enlaces.service';
import { RedSocial } from 'src/app/interfaces/restaurante.interface';

@Component({
  selector: 'app-barra-redes-sociales',
  templateUrl: './barra-redes-sociales.component.html',
  styleUrls: ['./barra-redes-sociales.component.css']
})
export class BarraRedesSocialesComponent implements OnInit {

  constructor(private enlacesService: EnlacesService) { }

  redesSociales: RedSocial[] = this.enlacesService.getRedesSociales();

  ngOnInit(): void {
  }

}
