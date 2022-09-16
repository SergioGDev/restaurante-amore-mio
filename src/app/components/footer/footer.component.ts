import { Component } from '@angular/core';
import { Option, RedSocial } from 'src/app/interfaces/restaurante.interface';
import { EnlacesService } from '../../services/enlaces.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private enlaceService: EnlacesService
  ) {}

  options: Option[] = this.enlaceService.getOpciones();
  redesSociales: RedSocial[] = this.enlaceService.getRedesSociales();
  enlacesLegales: Option[] = this.enlaceService.getEnlacesLegales();

}
