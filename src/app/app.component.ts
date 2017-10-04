import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  colspan = 3;

  todos: any[] = [];

  todo = '';

  addTodo() {
    if (this.todo) {
      let newTodo = {
        text : this.todo,
        done : false
      };
      this.todos = this.todos.concat(newTodo);
      this.todo = '';
    }
  }

}
