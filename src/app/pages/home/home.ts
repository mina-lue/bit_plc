import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ServiceCard } from "../../components/service-card/service-card";

@Component({
  selector: 'bit-home',
  imports: [CommonModule, TranslatePipe, ServiceCard],
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

  bitServices = [
    {
      title: 'Inventory Management Application',
      desc: "some description about the application",
      image: '/bit.png',
    },
    {
      title: 'Attendance and Payroll System',
      desc: "some description about the application",
      image: '/bit.png',
    },
    {
      title: 'School Management Dashboard',
      desc: "some description about the application",
      image: '/bit.png',
    },
    {
      title: 'Custom website development',
      desc: "some description about the application",
      image: '/bit.png',
    }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }, 2000);
  }

}
