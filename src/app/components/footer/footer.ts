import { Component } from '@angular/core';

@Component({
  selector: 'bit-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
}
