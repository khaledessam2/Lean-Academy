import { Component } from '@angular/core';

/**
 * Small trust hint: "Accredited by the National Center for E-Learning" (NELC).
 * Only show it if the academy actually holds the accreditation.
 */
@Component({
  selector: 'app-accreditation',
  standalone: true,
  templateUrl: './accreditation.html',
})
export class AccreditationComponent {}
