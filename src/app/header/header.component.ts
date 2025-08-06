
import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   toggleMenu = false;
  hideTopBar = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.hideTopBar = currentScroll > this.lastScrollTop && currentScroll > 50;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}

