import { Component, input } from '@angular/core';
import { Project } from 'src/app/data/portfolio';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
