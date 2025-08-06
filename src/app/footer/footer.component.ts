import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
