import { Component } from '@angular/core';
import { LucideArrowDown } from '@lucide/angular';
import { GITHUB_URL, HERO } from 'src/app/data/portfolio';
import { GithubIcon } from 'src/app/components/github-icon/github-icon';

@Component({
  imports: [LucideArrowDown, GithubIcon],
  selector: 'app-landing-hero',
  styleUrl: './landing-hero.scss',
  templateUrl: './landing-hero.html',
})
export class LandingHero {
  protected readonly hero = HERO;
  protected readonly githubUrl = GITHUB_URL;
}
