import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'bit-product-card',
  imports: [TranslatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  project = input.required<{title: string, id: string, desc: string, image: string}>();
}
