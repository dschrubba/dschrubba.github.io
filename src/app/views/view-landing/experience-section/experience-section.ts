import { Component } from '@angular/core';
import { EXPERIENCE } from 'src/app/data/portfolio';

@Component({
  imports: [],
  selector: 'app-experience-section',
  styleUrl: './experience-section.scss',
  templateUrl: './experience-section.html',
})
export class ExperienceSection {
  protected readonly entries = EXPERIENCE;
}
