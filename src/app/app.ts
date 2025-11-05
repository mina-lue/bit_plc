import { Component, inject, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { Home } from "./pages/home/home";
import {
    TranslateService,
} from "@ngx-translate/core";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bit-plc');
  private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['de', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }
}
