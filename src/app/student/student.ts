import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[] = [{
    name: 'John Doe',
    city: 'New York',
    gender: 'm',
    present: true,
  },{
    name: 'ej',
    city: 'a',
    gender: 'f',
    present: false,
  },{
    name: 'kirk',
    city: 'homeless',
    gender: 'm',
    present: true,
  },{
    name: 'gas',
    city: 'poland',
    gender: 'm',
    present: true,
  }];
}
