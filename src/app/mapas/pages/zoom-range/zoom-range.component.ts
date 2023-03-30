import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
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
        width: 400px;
      }

    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy{

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] =[ -4.1411415, 40.5911149]

  constructor() {  }
  
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {})
    this.mapa.off('zoomend', () => {})
    this.mapa.off('move', () => {})
  }

  ngAfterViewInit(): void {

    console.log('AfterViewinit',this.divMapa);

    this.mapa = new mapboxgl.Map({
      // container: 'mapa', //esto es porque ahora lo hacemos con el viewchild para no tener que poner muchas ids a los distintos mapas
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });
    //Evento zoom
    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    })
    // Evento zoomMaximo
    this.mapa.on('zoomend', (ev) => {
      if ( this.mapa.getZoom() > 18 ) {
        this.mapa.zoomTo( 18 );
      }
    })
    //Evento movimiento del mapa
    this.mapa.on('move', (event) => {
      // console.log(event);
      const target = event.target;
      // console.log(target.getCenter());
      const { lng, lat } = target.getCenter();
      this.center = [ lng, lat ];
      
    })

  }

  zoomOut() {
    this.mapa.zoomOut();
    // console.log('ZoomOut',this.divMapa);
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  zoomCambio( valor: string ) {
    this.mapa.zoomTo( Number(valor) );
  }

}
