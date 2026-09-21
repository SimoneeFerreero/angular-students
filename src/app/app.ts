import { Component, signal } from '@angular/core';
import { Animal } from './animal/animal';

@Component({
  selector: 'app-root',
  imports: [ Animal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
