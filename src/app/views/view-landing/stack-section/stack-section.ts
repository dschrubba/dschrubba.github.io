import { Component } from '@angular/core';
import { StackContent } from 'src/app/i18n/content.types';
import { scopedContent } from 'src/app/i18n/scoped-content';

@Component({
  imports: [],
  selector: 'app-stack-section',
  styleUrl: './stack-section.scss',
  templateUrl: './stack-section.html',
})
export class StackSection {
  protected readonly content = scopedContent<StackContent>('stack');
}
