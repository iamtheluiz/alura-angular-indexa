import { Component } from '@angular/core';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [ContainerComponent, HeaderComponent, SeparatorComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}
