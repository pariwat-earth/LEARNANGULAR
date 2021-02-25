import { Component, Input,} from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  @Input()
  title: string;
  arr = [];

  constructor() { }

  // tslint:disable-next-line:typedef
  AddArray(input: string){
    this.arr.push(input);
  }

  // tslint:disable-next-line:typedef
  delete(x){
    this.arr.splice(x, 1);
  }

}
