import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-world-record',
  imports: [CommonModule],
  templateUrl: './world-record.component.html',
  styleUrl: './world-record.component.scss'
})
export class WorldRecordComponent {
   constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('World Records - Opas Bizz Pvt. Ltd.');
    this.meta.addTags([
      { name: 'description', content: 'Discover our incredible world records and achievements across industries at Opas Bizz Pvt. Ltd.' },
      { name: 'keywords', content: 'world records, achievements, Opas Bizz, milestones, infrastructure' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }

records = [
  {
    title: 'Fastest Completion of 100 Smart Villages in India',
    description: 'Opas Bizz achieved this milestone in under 18 months.',
    date: 'January 2024',
  },
  {
    title: 'Largest Rural Utility Bill Network',
    description: 'Enabled digital payment access across 15,000+ villages.',
    date: 'March 2025',
  },
  {
    title: 'Women Empowerment Record',
    description: 'Trained 10,000+ women in rural fintech within 6 months.',
    date: 'July 2025',
  }
];


ngOnInit() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "World Records - Opas Bizz Pvt. Ltd.",
    "description": "Discover the world records and milestones achieved by Opas Bizz."
  });
  document.head.appendChild(script);
}


}
