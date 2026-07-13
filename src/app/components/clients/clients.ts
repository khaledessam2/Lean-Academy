import { Component, inject } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './clients.html',
})
export class ClientsComponent {
  private readonly clientsService = inject(ClientsService);
  protected readonly clients = this.clientsService.clients;
}
