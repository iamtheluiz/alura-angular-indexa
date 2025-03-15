import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { ContainerComponent } from "../../components/container/container.component";
import { SeparatorComponent } from "../../components/separator/separator.component";
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [
    ContainerComponent,
    SeparatorComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      birthday: new FormControl(''),
      social: new FormControl(''),
      description: new FormControl(''),
    });
  }

  saveContact() {
    if (this.contactForm.valid) {
      this.contactService.saveContact(this.contactForm.value);

      this.contactForm.reset();

      this.router.navigateByUrl("/lista-contatos")
    }
  }

  cancel() {
    this.contactForm.reset();
  }
}
