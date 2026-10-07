import { Component } from '@angular/core';
import { ExperienceContent } from 'src/app/i18n/content.types';
import { scopedContent } from 'src/app/i18n/scoped-content';

@Component({
  imports: [],
  selector: 'app-experience-section',
  styleUrl: './experience-section.scss',
  templateUrl: './experience-section.html',
})
export class ExperienceSection {
  protected readonly content = scopedContent<ExperienceContent>('experience');
}
