import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ServiceCard } from "../../components/service-card/service-card";
import { ProductCard } from "../../components/product-card/product-card";

@Component({
  selector: 'bit-home',
  imports: [CommonModule, TranslatePipe, ServiceCard, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private translate = inject(TranslateService);
  hoveredIndex: number | null = null;

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
    {
      title: 'E-commerce web application',
      image: '/bit.png',
    }
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
      title: 'Landing and listing site',
      desc: "some description about the application",
      image: '/bit.png',
    },
    {
      title: 'Custom website development',
      desc: "some description about the application",
      image: '/bit.png',
    }
  ];

  products = [
    {
      title: 'Bit School Pay',
      desc: "school fee payment application",
      image: '/school_pay.jpg',
      id: "school_pay"
    },
    {
      title: 'Bit Vehicles',
      desc: "site for car market information",
      image: '/bit.png',
      id: "vehicles"
    },
    {
      title: 'Kuta marketplace',
      desc: "marketplace for clothes in Ethiopia",
      image: '/kuta.png',
      id: "kuta"
    },
    {
      title: 'Desalegn Factory inventory app',
      desc: "Inventory application for cement based factory",
      image: '/inventory.png',
      id: "web"
    }
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }, 3000);
  }


  getCardStyle(index: number) {
    const total = this.cards.length;
    const diff = (index - this.currentIndex + total) % total;

    // compute relative position (0 = center, 1 = right, total-1 = left)
    let transform = '';
    let opacity = 0;
    let zIndex = 0;
    let scale = 0.8;

    if (diff === 0) {
      // center
      transform = 'translateX(0) scale(1.1)';
      opacity = 1;
      zIndex = 30;
    } else if (diff === 1) {
      // right
      transform = 'translateX(-220px) scale(0.9)';
      opacity = 0.6;
      zIndex = 20;
    } else if (diff === total - 1) {
      // left
      transform = 'translateX(220px) scale(0.9)';
      opacity = 0.6;
      zIndex = 20;
    } else {
      // hidden but keeps loop continuity
      transform = diff < total / 2 ? 'translateX(400px)' : 'translateX(-400px)';
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform,
      opacity: opacity.toString(),
      'z-index': zIndex.toString(),
      transition: 'all 0.7s ease-in-out',
    };
  }

  getCardPosition(index: number): string {
    const leftIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    const rightIndex = (this.currentIndex + 1) % this.cards.length;

    if (index === this.currentIndex) return 'z-20';
    if (index === leftIndex) return 'z-10';
    if (index === rightIndex) return 'z-10';
    return 'hidden'; // hide others
  }

 advantages = [
    {
      title: 'home.service.fully_customized',
      icon: 'custom',
      details: [
        'home.service.fully_customized_detail1',
        'home.service.fully_customized_detail2',
        'home.service.fully_customized_detail3',
      ],
    },
    {
      title: 'home.service.timely_delivery',
      icon: 'clock',
      details: [
        'home.service.timely_delivery_detail1',
        'home.service.timely_delivery_detail2',
      ],
    },
    {
      title: 'home.service.online_offline',
      icon: 'network',
      details: [
        'home.service.online_offline_detail1',
        'home.service.online_offline_detail2',
        'home.service.online_offline_detail3',
      ],
    },
    {
      title: 'home.service.standardized',
      icon: 'standard',
      details: [
        'home.service.standardized_detail1',
        'home.service.standardized_detail2',
      ],
    },
  ];

}
