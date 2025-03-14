import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from "../../components/container/container.component";
import { SeparatorComponent } from "../../components/separator/separator.component";

@Component({
  selector: 'app-contact-form',
  imports: [ContainerComponent, SeparatorComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor() {
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
      console.log(this.contactForm.value);
    }
  }

  cancel() {
    console.log("Solicitação cancelada!");
  }
}
