import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
showButton = false;

 constructor(private title: Title, private meta: Meta, private router: Router) {}

ngOnInit() {
  this.title.setTitle('Opas Infra – Building the Future of Infrastructure');

  this.meta.addTags([
    { name: 'description', content: 'Opas Infra is a global infrastructure company offering road, bridge, and smart city projects.' },
    { name: 'keywords', content: 'Opas Infra, infrastructure, construction, roads, engineering, urban development' },
    { name: 'author', content: 'Opas Infra' },
    { property: 'og:title', content: 'Opas Infra – Building the Future of Infrastructure' },
    { property: 'og:description', content: 'Smart and sustainable infrastructure solutions.' },
    { property: 'og:url', content: 'https://opasinfra.com' },
    { property: 'og:type', content: 'website' }
  ]);
  this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ Scroll to top on every route
      });
}

bannerImages: string[] = [
  
  '/assets/banner_maize.avif',
   '/assets/banner_maize.avif',
    '/assets/banner_maize.avif'
  
];

 @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showButton = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
