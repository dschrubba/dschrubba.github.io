import { Component, signal } from '@angular/core';
import { LucideBraces } from '@lucide/angular';

@Component({
  imports: [LucideBraces],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly title = signal('dschrubba');
  protected readonly links = [
    { label: 'work', fragment: 'work' },
    { label: 'experience', fragment: 'experience' },
    { label: 'stack', fragment: 'stack' },
    { label: 'contact', fragment: 'contact' },
  ];
}
