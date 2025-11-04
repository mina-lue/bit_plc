import { Component, input } from '@angular/core';

@Component({
  selector: 'bit-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  bitService = input.required<{title: string, image: string, desc: string}>();

}
