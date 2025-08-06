import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-strength',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrengthComponent {

  public strengths = [
  {
    icon: '/assets/strength/icons/team.svg',
    title: 'Expert Team',
    description: 'Skilled professionals with decades of experience.'
  },
  {
    icon: '/assets/strength/icons/quality.svg',
    title: 'Quality Materials',
    description: 'Certified and tested raw materials only.'
  },
  {
    icon: '/assets/strength/icons/timely.svg',
    title: 'Timely Delivery',
    description: 'Projects delivered on or before time.'
  },
  {
    icon: '/assets/strength/icons/equipment.svg',
    title: 'Modern Equipment',
    description: 'Advanced tools for precision and speed.'
  }
];






  // stats = [
  //   { label: 'Active Experts', value: 25 },
  //   { label: 'Completed Projects', value: 100 },
  //   { label: 'Satisfied Clients', value: 50 },
  //   { label: 'States Covered', value: 10 }
  // ];

  stats = [
  { label: 'Active Experts', value: 75 },
  { label: 'Completed Projects', value: 350 },
  { label: 'Satisfied Clients', value: 220 },
  // { label: 'States Covered', value: 18 },
  // { label: 'Years of Experience', value: 15 },
  // { label: 'Ongoing Projects', value: 27 },
  { label: 'Global Partnerships', value: 12 },
  { label: 'Safety Awards Won', value: 8 }
];

}
