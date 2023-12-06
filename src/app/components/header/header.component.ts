import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IconHamburgerComponent } from '../icons/icon-hamburger/icon-hamburger.component';
import { LogoComponent } from '../logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    NavigationComponent,
    IconHamburgerComponent,
  ],
  template: `
    <header class="header">
      <app-logo />

      <app-icon-hamburger
        (click)="handleMenu()"
        [ngClass]="{ isOpened: isOpened }"
      />

      <app-navigation *ngIf="isOpened" class="header__navigation" />
    </header>
  `,
  styles: `
    .header {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.6rem 2.4rem;
      border-bottom: 1px solid rgba(255, 255, 255, .2);

      &__navigation {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 69px;
        left: 0;
      }
    }

    .isOpened {
      opacity: 0.2487;
    }
  `,
})
export class HeaderComponent {
  isOpened = true;

  handleMenu() {
    this.isOpened = !this.isOpened;
  }
}
