import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [NgStyle, NgClass],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  M_COLOR = 'blue';
  F_COLOR = 'pink';
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

  getStyle(s: any){
    return {'background-color': s.gender == 'm' ? this.M_COLOR : this.F_COLOR, 'text-decoration': !s.present ? 'line-through' : 'none', 'font-weight': s.present ? 'bold' : 'normal'};
  }
}
