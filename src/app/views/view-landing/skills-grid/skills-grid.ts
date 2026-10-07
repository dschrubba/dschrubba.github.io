import { Component } from '@angular/core';
import { SkillGridCell } from 'src/app/views/view-landing/skills-grid/skill-grid-cell/skill-grid-cell';

@Component({
  imports: [
    SkillGridCell
  ],
  selector: 'app-skills-grid',
  styleUrl: './skills-grid.scss',
  templateUrl: './skills-grid.html',
})
export class SkillsGrid {}
