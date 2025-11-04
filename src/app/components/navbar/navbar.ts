import { Component, inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bit-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [TranslatePipe]
})
export class Navbar {
   isMenuOpen = false;
   private translate = inject(TranslateService);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  changeLang(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
  }

}
