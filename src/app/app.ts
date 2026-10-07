import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageContainer } from './components/page-container/page-container';
import { Navbar } from 'src/app/components/navbar/navbar';
import mdAppFooter from './markdown/app-footer.md';

@Component({
  imports: [RouterOutlet, PageContainer, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly mdAppFooter = mdAppFooter;
}
