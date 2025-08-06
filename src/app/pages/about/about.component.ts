import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Title, Meta } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = inject(Title);
  meta = inject(Meta);

currentSlideIndex = 0;
  slideImages = [
    'construction_site.avif',
    'railway_cons.avif',
    'bridge_cons.avif',
    'airport_cons.avif',
    'new_mall.avif'
    
    
  ];
   slideTitles = [
    'Smart City Development',
    'Highway Construction Excellence',
    'Bridging Progress',
    'Airport Infrastructure',
    'Railway Terminal Projects'
  ];
imageList: string[] = [
  'assets/about_image/com_highway.avif',
    'assets/about_image/about1.avif',
    'assets/about_image/about2.avif',
    'assets/about_image/about3.avif'
  ];

  achievementStats = [
  { value: 0, label: 'Projects Completed' },
  { value: 0, label: 'Happy Clients' },
  { value: 0, label: 'States Served' },
  { value: 0, label: 'Years in Operation' }
];


  currentImage: string = this.imageList[0];
  private imageIndex = 0;

  

  ngOnInit(): void {

      // Set Meta Title
    this.title.setTitle('About Us - Opas Bizz Pvt. Ltd | Infrastructure & Digital Services');

    // Set Meta Tags
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn about Opas Bizz Pvt. Ltd, a trusted leader in infrastructure development, utility bill payments, and digital inclusion across India.'
    });

    this.meta.updateTag({ name: 'keywords', content: 'Opas Bizz, infrastructure, bill payment, utility services, construction company, digital payments, rural inclusion, India' });

    this.meta.updateTag({ property: 'og:title', content: 'About Opas Bizz Pvt. Ltd' });
    this.meta.updateTag({ property: 'og:description', content: 'Trusted provider of infrastructure and utility services in India.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://opasbizz.in/assets/meta/about-banner.jpg' }); // update URL
    this.meta.updateTag({ property: 'og:url', content: 'https://opasbizz.in/about' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  
    
     // Animate counters
  setTimeout(() => {
    this.animateCounters([
      100, // Projects
      500, // Clients
      15,  // States
      25   // Years
    ]);
  }, 500);
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideImages.length;
    }, 5000);
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.imageList.length;
      this.currentImage = this.imageList[this.imageIndex];
    }, 3000); // 3 sec per image
     setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
      this.currentSlide = this.slides[this.slideIndex];
    }, 5000); // change every 5 seconds
  }


  slides = [
    {
      image: 'assets/about_image/com_highway.avif',
      title: 'HELPING YOU AND YOUR HOUSE BECOME BETTER ACQUAINTED.',
      breadcrumb: 'Project Detail'
    },
    {
      image: 'assets/about_image/com_highway.avif',
      title: 'CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES.',
      breadcrumb: 'About Us'
    },
    {
      image: 'assets/about_image/com_highway.avif',
      title: 'BUILDING A SMARTER TOMORROW WITH STRONGER FOUNDATIONS.',
      breadcrumb: 'Our Vision'
    }
  ];

  currentSlide = this.slides[0];
  slideIndex = 0;
  clientLogos = [
  { src: 'assets/banner1.avif', alt: 'Government of India' },
  { src: 'assets/banner1.avif', alt: 'Bharat BillPay' },
  { src: 'assets/banner1.avif', alt: 'MSME Registered' },
  { src: 'assets/banner1.avif', alt: 'FSSAI Certified' },
  { src: 'assets/banner1.avif', alt: 'ISO Certified' },
  { src: 'assets/banner1.avif', alt: 'Aadhar Verified Partner' }
];

testimonials = [
  {
    name: 'Ravi Sharma',
    company: 'Urban Infra Group',
    quote: 'Opas Bizz delivered our highway project ahead of schedule with quality beyond expectations.',
    photo: 'assets/about_image/com_highway.avif'
  },
  {
    name: 'Priya Mehra',
    company: 'SmartBill Technologies',
    quote: 'Their digital bill platform helped us scale our rural customer base seamlessly.',
    photo: 'assets/banner1.avif'
  },
  {
    name: 'Amit Bansal',
    company: 'BuildRight Co.',
    quote: 'Excellent project management and professional team. Highly recommended!',
    photo: 'assets/banner1.avif'
  }
];




animateCounters(finalValues: number[]): void {
  finalValues.forEach((final, index) => {
    let current = 0;
    const increment = Math.ceil(final / 50); // speed
    const interval = setInterval(() => {
      current += increment;
      if (current >= final) {
        this.achievementStats[index].value = final;
        clearInterval(interval);
      } else {
        this.achievementStats[index].value = current;
      }
    }, 40);
  });
}

 
}
