import { Component } from '@angular/core';
import { GITHUB_URL, PROJECTS } from 'src/app/data/portfolio';
import { ProjectCard } from './project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects-section',
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  protected readonly projects = PROJECTS;
  protected readonly githubUrl = GITHUB_URL;
}
