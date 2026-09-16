import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from "./student/student";

@Component({
  selector: 'app-root',
  imports: [Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 Author = 'Simone Ferrero';
}
