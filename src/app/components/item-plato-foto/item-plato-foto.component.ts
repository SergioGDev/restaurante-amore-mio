import { Component, Input } from '@angular/core';
import { Plato } from '../../interfaces/restaurante.interface';

@Component({
  selector: 'app-item-plato-foto',
  templateUrl: './item-plato-foto.component.html',
  styleUrls: ['./item-plato-foto.component.css']
})
export class ItemPlatoFotoComponent {

  @Input() itemPlato!: Plato;

}
