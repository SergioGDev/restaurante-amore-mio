import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit, OnInit {

  center: [number, number] = [-6.08978, 40.02984];
  center2: [number, number] = [-6.08978, 40.02984];
  zoom: number = 17;
  container: string = 'mapa';

  constructor() { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }

  ngAfterViewInit(): void {
    
   (mapboxgl as any).accessToken = environment.mapboxToken;
    
    var map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center2,
      zoom: this.zoom,
      scrollZoom: false
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(this.center2)
      .addTo(map);
  }
}
