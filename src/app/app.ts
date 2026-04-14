import { Component, signal } from '@angular/core';
import { ClienteListComponent } from "./features/cliente/pages/cliente-list/cliente-list.component";

@Component({
  selector: 'app-root',
  imports: [ClienteListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('examen.frontend');
}
