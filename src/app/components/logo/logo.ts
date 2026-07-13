import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.html',
})
export class LogoComponent {
  /** Colour of the book mark */
  readonly mark = input<string>('#ed7d31');
  /** Extra classes for the text portion */
  readonly textClass = input<string>('text-navy-700');
  readonly wrapperClass = input<string>('');
}
