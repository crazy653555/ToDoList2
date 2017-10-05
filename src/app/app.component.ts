import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  inputHint = 'What needs to be done?';
  colspan = 3;

  todos: any[] = [];

  todo = '';

  filterType = 'All';
  isToggleAll = true;

  private apiBase = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.http.get<any[]>(this.apiBase)
      .subscribe(data => {
        this.todos = data;
      });
  }

  addTodo() {
    if (this.todo) {
      const newTodo = {
        text: this.todo,
        done: false
      };

      this.http.post(this.apiBase, newTodo)
        .subscribe(data => {
          this.todos = this.todos.concat(newTodo);
          this.todo = '';
        });
    }
  }

  clearCompleted() {
    this.todos.filter(item => item.done).forEach(item => this.removeTodo(item));
  }

  updateFilterType($event) {
    this.filterType = $event;
  }

  toggleAll() {
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
    });
  }

  removeTodo(todo) {
    console.log('select:' + todo.id );
    this.http.delete(`${this.apiBase}/${todo.id}`)
      .subscribe(data => {
        console.log('delete ok');
        this.todos = this.todos.filter(item => item !== todo);
      });
  }
}
