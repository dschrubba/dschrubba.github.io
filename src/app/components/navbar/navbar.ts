import { Component, signal } from '@angular/core';
import { LucideBraces } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    LucideBraces,
    RouterLink
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly title = signal('dschrubba.github.io');
}
