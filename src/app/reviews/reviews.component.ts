import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../constants/items';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  @Input()
  reviews: Review[];

  constructor() {}

  ngOnInit(): void {}
}
