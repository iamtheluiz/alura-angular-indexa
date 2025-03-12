import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { SeparatorComponent } from "../../components/separator/separator.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ContainerComponent, SeparatorComponent, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(''),
      social: new FormControl(''),
      description: new FormControl(''),
    });
  }
}
