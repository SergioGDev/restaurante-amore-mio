import { Component, Input, OnInit } from '@angular/core';
import { Vino } from '../../interfaces/restaurante.interface';

@Component({
  selector: 'app-item-vinacoteca',
  templateUrl: './item-vinacoteca.component.html',
  styleUrls: ['./item-vinacoteca.component.css']
})
export class ItemVinacotecaComponent implements OnInit {

  @Input() item!: Vino;

  constructor() { }

  ngOnInit(): void {
  }

}
