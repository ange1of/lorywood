import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhotoItem } from '../constants/items';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {

  @Input() item: PhotoItem;
  @Input() close: () => void;

  form = new FormGroup({
    count: new FormControl(1, [Validators.required, Validators.min(1)]),
    details: new FormControl(''),
    contact: new FormControl('', [Validators.required])
  });

  submitted = false;

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      console.log(this.form.value);
      setTimeout(() => this.close(), 1600);
    } else {
      this.form.markAllAsTouched();
      console.log('form invalid');
    }

  }

}
