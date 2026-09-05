import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageContainer } from './components/page-container/page-container';
import { LucideBraces } from '@lucide/angular';
import mdAppFooter from './markdown/app-footer.md';

@Component({
  imports: [RouterOutlet, PageContainer, RouterLink, LucideBraces],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('dschrubba.github.io');
  protected readonly mdAppFooter = mdAppFooter;
}
