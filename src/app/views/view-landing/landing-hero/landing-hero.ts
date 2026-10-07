import { Component } from '@angular/core';
import { PageContainer } from 'src/app/components/page-container/page-container';
import { marked } from 'marked';
import profileTextMd from '../../../markdown/profile-text.md';

@Component({
  imports: [
    PageContainer
  ],
  selector: 'app-landing-hero',
  styleUrl: './landing-hero.scss',
  templateUrl: './landing-hero.html',
})
export class LandingHero {

  protected readonly profileText = marked.parse(profileTextMd);

}
