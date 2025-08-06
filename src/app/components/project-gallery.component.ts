import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
})
export class ProjectGalleryComponent {
  filters = ['All', 'Construction', 'Renovation', 'Outdoor', 'Interiors', 'Consulting'];
  selectedFilter = 'All';

  projects = [
    { title: 'Welding Station', category: 'Construction', image: '/assets/banner1.avif' },
    { title: 'Tower Crane', category: 'Construction', image: '/assets/banner1.avif' },
    { title: 'Skyscraper Build', category: 'Construction', image: '/assets/banner1.avif' },
    { title: 'Modern Home', category: 'Renovation', image: '/assets/banner1.avif' },
    { title: 'Futuristic Facade', category: 'Renovation', image: '/assets/banner1.avif' },
    { title: 'Bulldozer', category: 'Outdoor', image: '/assets/banner1.avif' },
    { title: 'Wood House', category: 'Outdoor', image: '/assets/banner1.avif' },
    { title: 'Bridge Build', category: 'Construction', image: '/assets/banner1.avif' },
    { title: 'Urban Project', category: 'Consulting', image: '/assets/banner1.avif' },
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  loadMore() {
    alert('Load more clicked – implement pagination here');
  }
}
