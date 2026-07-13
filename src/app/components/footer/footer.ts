import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo';
import { FooterService } from '../../services/footer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  private readonly footer = inject(FooterService);

  protected readonly year = this.footer.year;
  protected readonly socials = this.footer.socials;
  protected readonly columns = this.footer.columns;
}
