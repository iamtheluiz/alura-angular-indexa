import { Routes } from '@angular/router';

import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: "",
    component: ContactListComponent
  },
  {
    path: "novo",
    component: ContactFormComponent
  }
];
