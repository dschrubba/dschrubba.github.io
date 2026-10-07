import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skill-grid-cell',
  styleUrl: './skill-grid-cell.scss',
  templateUrl: './skill-grid-cell.html',
})
export class SkillGridCell {
  @Input() title: string = "Skill Name";
  @Input() text: string = "Lorem Ipsum is simply dummy text of the Lorem Ipsum‚";
}
