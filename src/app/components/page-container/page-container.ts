import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-container',
  styleUrl: './page-container.scss',
  templateUrl: './page-container.html',
})
export class PageContainer {
  @Input() paddingTopPx = 0;
  @Input() paddingBottomPx = 0;
  @Input() paddingLeftPx = 0;
  @Input() paddingRightPx = 0;
  @Input() paddingXPx = 0;
  @Input() paddingYPx = 0;
  @Input() backgroundStyle = 'transparent';
}
