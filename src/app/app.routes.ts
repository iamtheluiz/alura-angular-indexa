import { Routes } from '@angular/router';

import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: 'lista-contatos',
    component: ContactListComponent
  },
  {
    path: 'formulario',
    component: ContactFormComponent
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  }
];
