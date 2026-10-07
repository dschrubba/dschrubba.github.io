import { Component } from '@angular/core';
import { SkillGridCell } from './skill-grid-cell/skill-grid-cell';
import { FOCUS_AREAS } from 'src/app/data/portfolio';

/** "What I do" — the four focus areas under the hero. */
@Component({
  imports: [SkillGridCell],
  selector: 'app-skills-grid',
  styleUrl: './skills-grid.scss',
  templateUrl: './skills-grid.html',
})
export class SkillsGrid {
  protected readonly areas = FOCUS_AREAS;
}
