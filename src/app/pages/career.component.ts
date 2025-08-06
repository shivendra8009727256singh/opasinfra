import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Careers at Opas Bizz Pvt. Ltd.');
    this.meta.addTags([
      { name: 'description', content: 'Join our mission to digitally empower India. Explore open roles at Opas Bizz Pvt. Ltd. across technology, operations, and more.' },
      { name: 'keywords', content: 'careers, jobs at Opas Bizz, openings, apply, fintech jobs, infrastructure careers' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  jobOpenings = [
    {
      title: 'Frontend Developer (Angular)',
      location: 'Noida, India',
      type: 'Full-Time',
      description: 'Work on high-performance Angular apps with SSR, SEO, and animations.',
      link: '#'
    },
    {
      title: 'Operations Executive',
      location: 'Lucknow, India',
      type: 'Full-Time',
      description: 'Manage on-ground teams and ensure timely project deliveries in rural areas.',
      link: '#'
    },
    {
      title: 'Digital Marketing Manager',
      location: 'Remote',
      type: 'Contract',
      description: 'Plan and execute digital campaigns across Google, Meta, and regional platforms.',
      link: '#'
    }
  ];
  ngOnInit() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Opas Bizz Pvt. Ltd.",
    "url": "https://www.opasbizz.in/career",
    "sameAs": [],
    "logo": "https://www.opasbizz.in/assets/logo.png",
    "description": "Explore job opportunities at Opas Bizz Pvt. Ltd."
  });
  document.head.appendChild(script);
}

}
