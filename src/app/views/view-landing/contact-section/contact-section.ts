import { Component } from '@angular/core';
import { GITHUB_URL } from 'src/app/data/portfolio';
import { GithubIcon } from 'src/app/components/github-icon/github-icon';

@Component({
  imports: [GithubIcon],
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  protected readonly githubUrl = GITHUB_URL;
}
