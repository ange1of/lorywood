import { Component, OnInit } from '@angular/core';
import { MapOptions, Marker, latLng, icon } from 'leaflet';
import { ItemType, kitchenItems, lightItems } from '../constants/items';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  itemType = ItemType;
  kitchenItems = kitchenItems;
  lightItems = lightItems;

  mapOptions: MapOptions = {
    layers: [
      new Marker([54.7800533, 32.059879], {
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
    zoom: 4,
    center: latLng(54.7800533, 31.859879),
  };
}
