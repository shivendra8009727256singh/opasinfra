import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  counters = [
  { label: 'Projects Delivered', value: 0 },
  { label: 'Kilometers Completed', value: 0 },
  { label: 'Metro Corridors Built', value: 0 },
  { label: 'Smart Zones Delivered', value: 0 },
];


  filters = ['All', 'Road', 'Bridge', 'Metro', 'Smart City'];
  selectedFilter = 'All';

  completedProjects = [
    { title: 'Eastern Peripheral Expressway', category: 'Road', location: 'Delhi NCR', image: '/assets/projects/completed-road1.jpg' },
    { title: 'Signature Bridge', category: 'Bridge', location: 'Delhi', image: '/assets/projects/completed-bridge1.jpg' },
    { title: 'Bhopal Smart Zone A', category: 'Smart City', location: 'Bhopal', image: '/assets/projects/completed-smart1.jpg' },
    { title: 'Mumbai Metro Line 2A', category: 'Metro', location: 'Mumbai', image: '/assets/projects/completed-metro1.jpg' },
    { title: 'Golden Quadrilateral Section', category: 'Road', location: 'Kolkata', image: '/assets/projects/completed-road2.jpg' },
    { title: 'Yamuna Smart Township', category: 'Smart City', location: 'Noida', image: '/assets/projects/completed-smart2.jpg' },
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'All') return this.completedProjects;
    return this.completedProjects.filter(p => p.category === this.selectedFilter);
  }

  ngOnInit(): void {
    this.animateCounters();
    this.title.setTitle('Completed Projects - Opas Infra');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Explore completed infrastructure projects delivered by Opas Infra — including roads, bridges, metro lines, and smart city zones.'
      },
      {
        name: 'keywords',
        content: 'completed projects, metro, roads, bridges, smart city, opas infra'
      },
      { name: 'robots', content: 'index, follow' }
    ]);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Completed Projects - Opas Infra',
      description: 'Explore delivered infrastructure projects including metro, road, bridge, and smart city development by Opas Infra.',
      url: 'https://www.opasinfra.com/projects/completed'
    });
    document.head.appendChild(script);
  }
  animateCounters() {
  const finalValues = [180, 8200, 28, 10]; // Update with real data

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
