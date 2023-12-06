import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-hamburger',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      class="icon-hamburger"
    >
      <g fill="#FFF" fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  `,
  styles: `
    .icon-hamburger {
      cursor: pointer;
    }
  `,
})
export class IconHamburgerComponent {}
