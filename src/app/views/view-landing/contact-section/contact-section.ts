import { Component } from '@angular/core';
import { GITHUB_URL } from 'src/app/data/portfolio';
import { GithubIcon } from 'src/app/components/github-icon/github-icon';
import { ContactContent } from 'src/app/i18n/content.types';
import { scopedContent } from 'src/app/i18n/scoped-content';

@Component({
  imports: [GithubIcon],
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  protected readonly content = scopedContent<ContactContent>('contact');
  protected readonly githubUrl = GITHUB_URL;
}
