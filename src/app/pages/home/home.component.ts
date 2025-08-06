import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // ✅ Required for ngStyle

@Component({
  selector: 'app-home',
  imports: [CommonModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slideImages = [
    'city_banner.avif',
    'highway_construction.avif',
    'bridge_banner.avif',
    'airport_construction.avif',
    'train_con.avif'
  ];

  slideTitles = [
    'Smart City Development',
    'Highway Construction Excellence',
    'Bridging Progress',
    'Airport Infrastructure',
    'Railway Terminal Projects'
  ];

  slideBreadcrumbs = [
    'City Infra',
    'Highways',
    'Bridges',
    'Airports',
    'Urban Projects'
  ];

  currentSlideIndex = 0;
  stats = [
    { label: 'Active Experts', count: 0, target: 25 },
    { label: 'Satisfied Clients', count: 0, target: 50 },
    { label: 'Project Complete', count: 0, target: 100 }
  ];

  skills = [
    { name: 'Architecher', percent: 85 },
    { name: 'Construction', percent: 78 },
    { name: 'Building', percent: 65 },
    { name: 'Interior', percent: 40 },
    { name: 'Commercial', percent: 55 }
  ];
   slides = [
    {
      image: 'assets/home_image/bridge_banner.avif',
      title: 'HELPING YOU AND YOUR HOUSE BECOME BETTER ACQUAINTED.',
      breadcrumb: 'Project Detail'
    },
    {
      image: 'assets/home_image/Airport Construction.avif',
      title: 'CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES.',
      breadcrumb: 'About Us'
    },
    {
      image: 'assets/home_image/Urban Flyover Construction.avif',
      title: 'BUILDING A SMARTER TOMORROW WITH STRONGER FOUNDATIONS.',
      breadcrumb: 'Our Vision'
    },
    {
      image: 'assets/home_image/highway_construction.avif',
      title: 'BUILDING A SMARTER TOMORROW WITH STRONGER FOUNDATIONS.',
      breadcrumb: 'Our Vision'
    },
    {
      image: 'assets/home_image/city_banner.avif',
      title: 'BUILDING A SMARTER TOMORROW WITH STRONGER FOUNDATIONS.',
      breadcrumb: 'Our Vision'
    },
     {
      image: 'assets/home_image/Water Treatment Construction.avif',
      title: 'BUILDING A SMARTER TOMORROW WITH STRONGER FOUNDATIONS.',
      breadcrumb: 'Our Vision'
    }
  ];

  // project start/////
opasProjects = [
  {
    image: 'assets/banner1.avif',
    title: 'Worker Zone',
    subtitle: 'On-site Execution'
  },
  {
    image: 'assets/image1.png',
    title: 'Industrial Work',
    subtitle: 'Safety & Precision'
  },
  {
    image: 'assets/home_image/future_city.avif',
    title: 'Renovation',
    subtitle: 'Dazzling Design'
  }
];

  // ////project end /////

  projectImages: string[] = [

    'assets/projects/ongoing/Industrious.jpg',
    'assets/ai_images/image1.avif',
    'assets/banner1.avif',
    'assets/ai_images/image1.avif',
    'assets/projects/ongoing/Industrious.jpg',
    'assets/banner1.avif',
    'assets/ai_images/image1.avif',
    'assets/projects/ongoing/Industrious.jpg',
    'assets/banner1.avif',
    'assets/ai_images/image1.avif',
   'assets/projects/ongoing/Industrious.jpg',
  ];
 

 
imageList: string[] = [
    'assets/banner_maize.avif',
    'assets/banner_maize.avif',
    'assets/banner_maize.avif'
  ];

  currentImage: string = this.imageList[0];
  // private imageIndex = 0;

  slidess = [
    {
      image: 'assets/ai_images/image1.avif',
      alt: 'Construction worker holding support',
      highlight: 'Contrary to popular belief, lorem Ipsum is not simply text. It has roots in a piece of classical Latin literature from 45 BC.',
      description: 'There are many variations of passages available, but the majority have suffered alteration in some form.',
      link: '/about'
    },
    {
      image: 'assets/ai_images/image2.avif',
      alt: 'Engineer inspecting site',
      highlight: 'We deliver top-quality builds on time and budget.',
      description: 'Every project is handled with professionalism and precision for lasting value.',
      link: '/services'
    },
    {
      image: 'assets/ai_images/image3.avif',
      alt: 'Safety inspection in process',
      highlight: 'Certified processes and skilled professionals.',
      description: 'You can rely on us to build with integrity and pride.',
      link: '/projects'
    },
    {
      image: 'assets/ai_images/image4.avif',
      alt: 'Safety inspection in process',
      highlight: 'Certified processes and skilled professionals.',
      description: 'You can rely on us to build with integrity and pride.',
      link: '/projects'
    }
  ];

  currentIndex = 0;
  intervalId: any;
  
  currentSlide = this.slides[0];
  slideIndex = 0;



  

  ngOnInit(): void {
    this.animateCounters();
     setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideImages.length;
    }, 5000);
    
    
     this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000); // Auto slide every 5 seconds
  }


   ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

goToSlide(index: number): void {
    this.currentIndex = index;
  }
 



   animateCounters() {
    this.stats.forEach((stat, index) => {
      let current = 0;
      const step = Math.ceil(stat.target / 40); // Adjust for speed
      const interval = setInterval(() => {
        current += step;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(interval);
        }
        this.stats[index].count = current;
      }, 50);
    });
  }
}
