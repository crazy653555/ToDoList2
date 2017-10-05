import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  filterType = 'All';
  isToggleAll = true;

  constructor(private http: HttpClient) {

  }

  addTodo() {
    if (this.todo) {
      const newTodo = {
        text: this.todo,
        done: false
      };
      this.todos = this.todos.concat(newTodo);
      this.todo = '';
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(item => !item.done);
  }

  updateFilterType($event) {
    this.filterType = $event;
  }

  toggleAll() {
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
    });
  }

  removeTodo($event) {
    this.todos = this.todos.filter(item => item !== $event);
  }
}
