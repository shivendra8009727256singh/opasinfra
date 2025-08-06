import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact Us - Opas Bizz Pvt. Ltd.');
    this.meta.addTags([
      { name: 'description', content: 'Reach out to Opas Bizz Pvt. Ltd. for inquiries, support, or partnership opportunities.' },
      { name: 'keywords', content: 'contact, Opas Bizz, support, business inquiry, address' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  currentSlideIndex = 0;
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

slideImages = [
    'bridge_over.avif',
    'road_matro.avif',
    'urban_over.avif'
       
  ];
  slideTitles = [
    'Smart City Development',
    'Highway Construction Excellence',
    'Bridging Progress',
    'Airport Infrastructure',
    'Railway Terminal Projects'
  ];



  ngOnInit() {
     setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideImages.length;
    }, 5000);
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Opas Bizz Pvt. Ltd.",
    "url": "https://www.opasinfra.com/contact",
    "description": "Official contact page of Opas Bizz for queries and support."
  });
  document.head.appendChild(script);
}

  submitForm() {
    // Replace this with your API logic
    console.log('Form submitted:', this.contactForm);
    alert('Thank you for contacting us!');
  }

}
