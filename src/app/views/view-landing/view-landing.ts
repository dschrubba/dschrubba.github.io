import { Component } from '@angular/core';
import { PageContainer } from "../../components/page-container/page-container";
import { marked } from 'marked';
import mdLandingPageHero from "../../markdown/landing-page-hero.md"

@Component({
  imports: [PageContainer],
  selector: 'app-view-landing',
  styleUrl: './view-landing.scss',
  templateUrl: './view-landing.html',
})
export class ViewLanding {
  protected readonly marked = marked;
  protected readonly mdLandingPageHero = mdLandingPageHero;
}
