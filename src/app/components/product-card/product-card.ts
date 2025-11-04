import { Component, input } from '@angular/core';

@Component({
  selector: 'bit-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  project = input.required<{title: string, id: string, desc: string, image: string}>();
}
