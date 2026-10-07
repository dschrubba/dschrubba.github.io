import { Component } from '@angular/core';
import { LandingHero } from './landing-hero/landing-hero';
import { SkillsGrid } from './skills-grid/skills-grid';
import { ProjectsSection } from './projects-section/projects-section';
import { ExperienceSection } from './experience-section/experience-section';
import { StackSection } from './stack-section/stack-section';
import { ContactSection } from './contact-section/contact-section';

@Component({
  imports: [
    LandingHero,
    SkillsGrid,
    ProjectsSection,
    ExperienceSection,
    StackSection,
    ContactSection,
  ],
  selector: 'app-view-landing',
  styleUrl: './view-landing.scss',
  templateUrl: './view-landing.html',
})
export class ViewLanding {}
