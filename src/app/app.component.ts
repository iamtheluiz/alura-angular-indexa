import { Component } from '@angular/core';
import { ContainerComponent } from "./components/container/container.component";

@Component({
  selector: 'app-root',
  imports: [ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alura-angular-indexa';
}
