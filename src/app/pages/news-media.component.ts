import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-media.component.html',
  styleUrls: ['./news-media.component.scss']
})
export class NewsMediaComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('News & Media - Opas Bizz Pvt. Ltd.');
    this.meta.addTags([
      { name: 'description', content: 'Read the latest news, media coverage, and press releases of Opas Bizz Pvt. Ltd. across the world.' },
      { name: 'keywords', content: 'Opas Bizz news, press release, media, infrastructure news, fintech media' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  newsList = [
    {
      title: 'Opas Bizz Partners with UNDP for Rural Empowerment',
      summary: 'A strategic partnership to accelerate sustainable development goals in Indian villages.',
      image: '/assets/news-media/undp-partnership.jpg',
      date: 'July 2025',
      link: '#'
    },
    {
      title: 'Featured in The Economic Times',
      summary: 'Recognized as one of the fastest-growing infrastructure enablers in South Asia.',
      image: '/assets/news-media/economic-times.jpg',
      date: 'June 2025',
      link: '#'
    },
    {
      title: 'Opas Bizz Digital Campaign Crosses 1M Views',
      summary: 'The #DigitalRuralIndia campaign gained viral momentum on social platforms.',
      image: '/assets/news-media/digital-campaign.jpg',
      date: 'May 2025',
      link: '#'
    }
  ];
  ngOnInit() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Opas Bizz Pvt. Ltd.",
    "url": "https://www.opasinfra.com/news-media",
    "logo": "https://www.opasinfra.com/assets/logo.png"
  });
  document.head.appendChild(script);
}

}
