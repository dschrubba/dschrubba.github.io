import { Component, computed, input } from '@angular/core';
import { PROJECT_MEDIA } from 'src/app/data/portfolio';
import { ProjectItem } from 'src/app/i18n/content.types';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<ProjectItem>();
  readonly tagsLabel = input('');
  protected readonly media = computed(() => PROJECT_MEDIA[this.project().id] ?? {});
}
