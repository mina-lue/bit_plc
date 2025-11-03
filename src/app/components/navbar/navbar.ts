import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  animations: [
    trigger('expandNav', [
      transition(':enter', [
        style({
          width: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '9999px',
          opacity: 0,
        }),
        animate(
          '600ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            width: '*',
            marginLeft: 0,
            marginRight: 0,
            borderRadius: 0,
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
  styleUrl: './navbar.scss',
})
export class Navbar {
   isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
