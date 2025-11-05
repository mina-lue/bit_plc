import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'bit-service-card',
  imports: [TranslatePipe],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  bitService = input.required<{title: string, image: string, desc: string}>();

}
