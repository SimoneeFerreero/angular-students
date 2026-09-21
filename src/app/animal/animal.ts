import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-animal',
  imports: [NgStyle],
  templateUrl: './animal.html',
  styleUrl: './animal.css',
})
export class Animal {
  Animals = [{ tipo: 'Mammifero', nome: 'Luna', specie: 'gatto', DataNascita: '2021-05-12' },
  { tipo: 'Uccello', nome: 'Pippo', specie: 'pappagallo', DataNascita: '2019-08-20' },
  { tipo: 'Rettile', nome: 'Rango', specie: 'camaleonte', DataNascita: '2022-03-15' },
  { tipo: 'Anfibio', nome: 'Kermit', specie: 'rana', DataNascita: '2023-01-10' },
  { tipo: 'Mammifero', nome: 'Bambi', specie: 'cervo', DataNascita: '2014-11-04' },
  ];
  getStyle(s: any) {
    let style: any = {};

    if (s.tipo === 'Mammifero') {
      style.color = 'blue';
    } else if (s.tipo === 'Uccello') {
      style.color = 'green';
    } else if (s.tipo === 'Rettile') {
      style.color = 'orange';
    } else if (s.tipo === 'Anfibio') {
      style.color = 'purple';
    }

    let today = new Date();
    let birthDate = new Date(s.DataNascita);
    let age = today.getFullYear() - birthDate.getFullYear();

    if (age > 5) {
      style['font-weight'] = 'bold';
    }

    return style;
  }
}

