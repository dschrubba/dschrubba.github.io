import { Component, inject, signal } from '@angular/core';
import { LucideBraces } from '@lucide/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageService } from 'src/app/i18n/language';

@Component({
  imports: [LucideBraces, TranslocoPipe],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly language = inject(LanguageService);
  protected readonly title = signal('dschrubba');
  protected readonly links = ['work', 'experience', 'stack', 'contact'];
}
