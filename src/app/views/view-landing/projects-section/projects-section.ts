import { Component } from '@angular/core';
import { GITHUB_URL } from 'src/app/data/portfolio';
import { ProjectsContent } from 'src/app/i18n/content.types';
import { scopedContent } from 'src/app/i18n/scoped-content';
import { ProjectCard } from './project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects-section',
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  protected readonly content = scopedContent<ProjectsContent>('projects');
  protected readonly githubUrl = GITHUB_URL;
}
