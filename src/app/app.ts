import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { Navbar } from 'src/app/components/navbar/navbar';
import { LanguageService } from './i18n/language';

@Component({
  imports: [RouterOutlet, Navbar, TranslocoPipe],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly year = new Date().getFullYear();

  constructor() {
    // Created here so <html lang>, title and the saved choice stay in sync from the start.
    inject(LanguageService);
  }
}
