import { Component, OnInit } from '@angular/core';
import { MapOptions, Marker, latLng, icon } from 'leaflet';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  mapOptions: MapOptions = {
    layers: [
      new Marker([54.7800533, 31.859879], {
        icon: icon({
          iconUrl: 'assets/images/leaf-green.png',
          iconSize: [38, 95],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76],
        }),
      }),
    ],
    zoom: 7,
    center: latLng(54.7800533, 31.859879),
  };
}
