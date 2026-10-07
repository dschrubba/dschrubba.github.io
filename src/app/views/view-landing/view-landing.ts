import { Component } from '@angular/core';
import { PageContainer } from "../../components/page-container/page-container";
import { marked } from 'marked';
import mdLandingPageHero from "../../markdown/landing-page-hero.md"
import { SkillsGrid } from 'src/app/views/view-landing/skills-grid/skills-grid';
import { LandingHero } from 'src/app/views/view-landing/landing-hero/landing-hero';

@Component({
  imports: [PageContainer, SkillsGrid, LandingHero],
  selector: 'app-view-landing',
  styleUrl: './view-landing.scss',
  templateUrl: './view-landing.html',
})
export class ViewLanding {
  protected readonly marked = marked;
  protected readonly mdLandingPageHero = mdLandingPageHero;
}
