import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from 'src/app/components/navbar/navbar';
import mdAppFooter from './markdown/app-footer.md';

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly mdAppFooter = mdAppFooter;
  protected readonly year = new Date().getFullYear();
}
