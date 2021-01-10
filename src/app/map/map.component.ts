import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import 'leaflet/dist/leaflet.css';
import { Map, MapOptions, map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input()
  options: MapOptions = {};

  map: Map;

  constructor(private element: ElementRef, private zone: NgZone) {
    // this.map = map(this.element.nativeElement);
  }

  ngOnInit(): void {
    console.log(this.options);
    this.map = map(this.element.nativeElement, this.options);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    }).addTo(this.map);
  }
}
