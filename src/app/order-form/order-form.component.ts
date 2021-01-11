import { Component, Input } from '@angular/core';
import { PhotoItem } from '../constants/items';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {

  @Input() item: PhotoItem | null = null;

  close() {}
}
