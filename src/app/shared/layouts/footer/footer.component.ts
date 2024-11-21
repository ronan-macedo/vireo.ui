import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'shared-layouts-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  version = environment.version;
  year = new Date().getFullYear();
}
