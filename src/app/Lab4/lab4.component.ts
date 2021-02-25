import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class Lab4component{
  @Input()
  arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {}
}
