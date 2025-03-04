import { Component } from '@angular/core';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { ContactComponent } from './components/contact/contact.component';

import agenda from './agenda.json';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  imports: [ContainerComponent, HeaderComponent, SeparatorComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  contacts: Contact[] = agenda;

  filterContactsByFistLetter(letter: string): Contact[] {
    return this.contacts.filter(contact => contact.name[0].toUpperCase() === letter.toUpperCase());
  }
}
