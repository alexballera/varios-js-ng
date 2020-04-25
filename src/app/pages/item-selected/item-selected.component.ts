import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.scss']
})
export class ItemSelectedComponent implements OnInit {
  lists: any[] = [
    {
      title: 'Tarea 1',
      date: '17/06',
      delivered: '03',
      total: '10',
    },
    {
      title: 'Tarea 1',
      date: '17/06',
      delivered: '03',
      total: '10',
    },
    {
      title: 'Tarea 1',
      date: '17/06',
      delivered: '03',
      total: '10',
    },
    {
      title: 'Tarea 1',
      date: '17/06',
      delivered: '03',
      total: '10',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // Recorre el array y le agrega el item selected con el valor false
    this.lists = this.lists.map(item => ({ ...item, selected: false}));
  }

  /* Recorre el Array para verificar si el index === i y colocar valor 'true' en 'selected'
  y al resto como valor 'false' */

  handleSelectItem(i: number) {
    this.lists = this.lists.map((task, index) => {
      if (index === i) {
        return { ...task, selected: true };
      }
      return { ...task, selected: false };
    });
  }

}
