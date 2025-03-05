import { Component } from '@angular/core';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';

import agenda from './agenda.json';
import { removeTextAccent } from './utils/removeTextAccent';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  imports: [
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  contacts: Contact[] = agenda;

  textFilter = '';

  filterContactsByText(): Contact[] {
    if (!this.textFilter) {
      return this.contacts;
    }

    return this.contacts.filter(contact => removeTextAccent(contact.name).toLowerCase().includes(removeTextAccent(this.textFilter).toLowerCase()));
  }

  filterContactsByFistLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => removeTextAccent(contact.name)[0].toUpperCase() === letter.toUpperCase());
  }
}
