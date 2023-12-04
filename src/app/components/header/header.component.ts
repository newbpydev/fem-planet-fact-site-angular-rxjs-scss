import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LogoComponent } from '../logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, NavigationComponent],
  template: `
    <header>
      <app-logo />

      <app-navigation />

    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
