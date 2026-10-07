import { Component } from '@angular/core';
import { LucideArrowDown } from '@lucide/angular';
import { GITHUB_URL, HERO_MEDIA } from 'src/app/data/portfolio';
import { GithubIcon } from 'src/app/components/github-icon/github-icon';
import { HeroContent } from 'src/app/i18n/content.types';
import { scopedContent } from 'src/app/i18n/scoped-content';

@Component({
  imports: [LucideArrowDown, GithubIcon],
  selector: 'app-landing-hero',
  styleUrl: './landing-hero.scss',
  templateUrl: './landing-hero.html',
})
export class LandingHero {
  protected readonly content = scopedContent<HeroContent>('hero');
  protected readonly media = HERO_MEDIA;
  protected readonly githubUrl = GITHUB_URL;
}
