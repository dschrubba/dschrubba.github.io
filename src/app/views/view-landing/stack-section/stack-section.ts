import { Component } from '@angular/core';
import { STACK } from 'src/app/data/portfolio';

@Component({
  imports: [],
  selector: 'app-stack-section',
  styleUrl: './stack-section.scss',
  templateUrl: './stack-section.html',
})
export class StackSection {
  protected readonly groups = STACK;
}
