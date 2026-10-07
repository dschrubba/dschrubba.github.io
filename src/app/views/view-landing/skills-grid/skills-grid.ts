import { Component } from '@angular/core';
import { SkillGridCell } from './skill-grid-cell/skill-grid-cell';
import { FocusContent } from 'src/app/i18n/content.types';
import { scopedContent } from 'src/app/i18n/scoped-content';

/** "What I do" — the four focus areas under the hero. */
@Component({
  imports: [SkillGridCell],
  selector: 'app-skills-grid',
  styleUrl: './skills-grid.scss',
  templateUrl: './skills-grid.html',
})
export class SkillsGrid {
  protected readonly content = scopedContent<FocusContent>('focus');
}
