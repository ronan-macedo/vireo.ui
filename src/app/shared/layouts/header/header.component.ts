import { Component } from '@angular/core';
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'shared-layouts-header',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
