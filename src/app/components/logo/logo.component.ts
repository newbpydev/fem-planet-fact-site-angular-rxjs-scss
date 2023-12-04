import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: ` <span class="logo"> The Planets </span> `,
  styles: `
    .logo {
      font-family: var(--font-family-antonio);
      text-transform: uppercase;
      font-size: 2.8rem;
      letter-spacing: -1.05px;
    }
  `,
})
export class LogoComponent {}
