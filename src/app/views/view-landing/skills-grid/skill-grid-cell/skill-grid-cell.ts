import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skill-grid-cell',
  styleUrl: './skill-grid-cell.scss',
  templateUrl: './skill-grid-cell.html',
})
export class SkillGridCell {
  readonly index = input(1);
  readonly title = input('Skill name');
  readonly text = input('');
  /** Optional image shown above the text, cropped to 16:9. */
  readonly image = input('');
  protected readonly number = computed(() => String(this.index()).padStart(2, '0'));
}
