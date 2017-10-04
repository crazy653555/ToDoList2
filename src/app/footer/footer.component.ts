import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename

  tooMore = false;
  private _todo = [];

  @Input('data')
  set todos(value) {
    this._todo = value;
    this.tooMore = this.todos.length > 5;
  }
  get todos() {
    return this._todo;
  }

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  @Output() clearBtnClick = new EventEmitter();
}
