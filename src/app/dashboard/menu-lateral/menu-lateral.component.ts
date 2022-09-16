import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../../services/enlaces.service';
import { Option } from '../../interfaces/restaurante.interface';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  enlaces: Option[] = [];
  comprimido: boolean = false;

  constructor (
    private enlacesService: EnlacesService
  ) { }

  ngOnInit(): void {
    this.enlaces = this.enlacesService.getOpcionesConfiguracion();
  }

  

}
