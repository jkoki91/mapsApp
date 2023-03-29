import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height:100%;
      }


      .row {
        background-color: white;
        border-radius: 5px;
        left: 50px;
        bottom: 50px;
        padding:10px;
        position: fixed;
        z-index: 999999;
      }



    `
  ]
})
export class ZoomRangeComponent {

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -4.1411415, 40.5911149],
      zoom: 15
    });

  }
}
