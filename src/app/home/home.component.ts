import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @Input()
  title: string;
  count = 0 ;
  constructor() {}

  // tslint:disable-next-line:typedef
  countNumber(){
    this.count = this.count + 1 ;
  }
}
