import { ComponentFactoryResolver, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { PhotoItem, Item, ItemType } from '../constants/items';
import { OrderFormComponent } from '../order-form/order-form.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input()
  items: Item[] = [];

  @ViewChild('order', {read: ViewContainerRef}) orderForm: ViewContainerRef;

  itemType = ItemType;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  createOrder(item: PhotoItem) {
    const orderComponentFactory = this.componentFactoryResolver.resolveComponentFactory(OrderFormComponent);
    const orderComponentRef = this.orderForm.createComponent(orderComponentFactory);
    orderComponentRef.instance.item = item;
    orderComponentRef.instance.close = orderComponentRef.destroy.bind(orderComponentRef);
  }
}
