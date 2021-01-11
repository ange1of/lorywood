import { Component, Input, OnInit } from '@angular/core';
import { Item, ItemType } from '../constants/items';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input()
  items: Item[] = [];

  itemType = ItemType;

  constructor() {}

  ngOnInit(): void {}
}
