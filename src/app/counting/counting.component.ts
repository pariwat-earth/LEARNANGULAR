import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})

export class CountingComponent{
  @Input()
  count = 0;
  constructor() {}

  // tslint:disable-next-line:typedef
  counter(){
    this.count = this.count + 1;
  }
  // tslint:disable-next-line:typedef
  delete(){
    this.count = this.count - 1;
  }
}
