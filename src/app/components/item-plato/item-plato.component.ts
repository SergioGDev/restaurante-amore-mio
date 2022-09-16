import { Component, Input } from '@angular/core';
import { Plato } from '../../interfaces/restaurante.interface';

@Component({
  selector: 'app-item-plato',
  templateUrl: './item-plato.component.html',
  styleUrls: ['./item-plato.component.css']
})
export class ItemPlatoComponent {

  @Input() itemPlato!: Plato;

}
