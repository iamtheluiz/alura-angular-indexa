import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContactComponent } from '../../components/contact/contact.component';

import { removeTextAccent } from '../../utils/removeTextAccent';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-list',
  imports: [
    FormsModule,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    RouterLink
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  contacts: Contact[] = [];

  textFilter = '';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

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
