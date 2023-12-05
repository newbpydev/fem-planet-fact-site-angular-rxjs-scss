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
          <a class="navigation__link" href="">
            <div class="navigation__link-group">
              <span class="navigation__link-icon"></span>
              <span class="navigation__link-text">
                {{ link }}
              </span>
            </div>
            <span class="navigation__link-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </span>
          </a>
        </li>
        }
      </ul>
    </nav>
  `,
  styles: `
  .navigation {
    height: 100%;
    margin: 2.4rem;

    &__list {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1.364px;
    }

    &__list-item {
      border-bottom: 1px solid rgba(255, 255, 255, .1);

      &:last-of-type {
        border-bottom: none;
      }
    }

    &__link {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0;

    }

    &__link-group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;

    }

    &__link-icon {
      content: '';
      background-color: yellow;
      width: 2rem;
      height: 2rem;
      border-radius: 5rem;
    }

    &__link-text {
      display: inline-block;

    }

    &__link-arrow {

    }
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
