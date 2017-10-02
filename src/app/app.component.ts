import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = "What needs to be done???";
  colspan = 3;

  todos: any[] = [];

  todo: string = '';

  addTodo() {
    if (this.todo) {
      this.todos = this.todos.concat(this.todo);
      this.todo = '';
    }
  }

}
