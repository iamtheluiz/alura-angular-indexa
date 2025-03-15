import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    const localStorageContactsString = localStorage.getItem("@alura-angular-indexa/contacts");
    const localStorageContacts = localStorageContactsString ? JSON.parse(localStorageContactsString) : [];

    this.contacts = localStorageContacts;
  }

  getContacts() {
    return this.contacts;
  }

  saveContact(contact: Contact) {
    this.contacts.push(contact);

    localStorage.setItem("@alura-angular-indexa/contacts", JSON.stringify(this.contacts));
  }
}
