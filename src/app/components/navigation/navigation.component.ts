import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navigation">
      <ul class="navigation__list">
        @for (link of links; track $index) {
        <li class="navigation__list-item">
          <a class="navigation__link" href="">{{ link }}</a>
        </li>
        }
      </ul>
    </nav>
  `,
  styles: `
  .navigation {

    &__list {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1.364px;
    }

    &__list-item {}

    &__link {}
  }
  `,
})
export class NavigationComponent {
  links = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ];
}
