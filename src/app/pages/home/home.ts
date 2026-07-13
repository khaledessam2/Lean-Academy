import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { OverviewComponent } from '../../components/overview/overview';
import { FeaturesComponent } from '../../components/features/features';
import { AudienceComponent } from '../../components/audience/audience';
import { ReportsComponent } from '../../components/reports/reports';
import { ClientsComponent } from '../../components/clients/clients';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    OverviewComponent,
    FeaturesComponent,
    AudienceComponent,
    ReportsComponent,
    ClientsComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
})
export class HomeComponent {}
