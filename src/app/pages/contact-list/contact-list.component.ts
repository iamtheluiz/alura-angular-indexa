import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContactComponent } from '../../components/contact/contact.component';

import agenda from '../../agenda.json';
import { removeTextAccent } from '../../utils/removeTextAccent';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-contact-list',
  imports: [
    FormsModule,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
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
