import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bit-home',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private translate = inject(TranslateService)
   cards = [
    {
      title: 'Inventory Management Application',
      image: '/bit.png',
    },
    {
      title: 'Attendance and Payroll System',
      image: '/bit.png',
    },
    {
      title: 'School Management Dashboard',
      image: '/bit.png',
    },
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }, 2000);
  }

}
