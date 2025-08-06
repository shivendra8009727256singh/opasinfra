import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ongoing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.scss']
})
export class OngoingComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}
  counters = [
  { label: 'Projects In Progress', value: 0 },
  { label: 'Kilometers Under Construction', value: 0 },
  { label: 'Metro Lines Active', value: 0 },
  { label: 'Flyovers Being Built', value: 0 },
];


  filters = ['All', 'Road', 'Bridge', 'Metro', 'Smart City'];
  selectedFilter = 'All';

  ongoingProjects = [
    { title: 'Delhi Metro Phase 4', category: 'Metro', location: 'Delhi', image: '/assets/projects/ongoing/industrious.jpg' },
    { title: 'Yamuna Expressway Expansion', category: 'Road', location: 'UP', image: '/assets/projects/ongoing/industrious.jpg' },
    { title: 'Ganga Bridge Corridor', category: 'Bridge', location: 'Bihar', image: '/assets/projects/ongoing/industrious.jpg' },
    { title: 'Smart Bhopal Sector A', category: 'Smart City', location: 'Bhopal', image: '/assets/projects/ongoing/industrious.jpg' },
    { title: 'Ahmedabad Elevated Bridge', category: 'Bridge', location: 'Ahmedabad', image: '/assets/projects/ongoing/industrious.jpg' },
    { title: 'Ring Road Extension', category: 'Road', location: 'Nagpur', image: '/assets/projects/ongoing/industrious.jpg' },
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'All') return this.ongoingProjects;
    return this.ongoingProjects.filter(p => p.category === this.selectedFilter);
  }

  loadMore() {
    alert('Load more clicked – future pagination here.');
  }

  ngOnInit(): void {
    this.animateCounters();
    this.title.setTitle('Ongoing Projects - Opas Infra');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Explore ongoing infrastructure projects including roads, bridges, metro lines, and smart city development by Opas Infra across India.'
      },
      {
        name: 'keywords',
        content:
          'ongoing infrastructure, metro projects, bridge construction, road projects, smart city, opas infra'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Ongoing Projects - Opas Infra',
      description:
        'Active metro, bridge, and road infrastructure projects by Opas Infra across India.',
      url: 'https://www.opasinfra.com/projects/ongoing'
    });
    document.head.appendChild(script);
  }

  animateCounters() {
  const finalValues = [38, 1200, 14, 22]; // Example values

  this.counters.forEach((counter, index) => {
    let current = 0;
    const increment = Math.ceil(finalValues[index] / 60); // ~60 frames
    const interval = setInterval(() => {
      current += increment;
      if (current >= finalValues[index]) {
        current = finalValues[index];
        clearInterval(interval);
      }
      this.counters[index].value = current;
    }, 25);
  });
}

}
