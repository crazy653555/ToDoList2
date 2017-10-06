import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


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


  constructor(private dataSvc: DataService
  ) {

  }


  ngOnInit(): void {
    this.dataSvc.getTodos()
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

      this.dataSvc.addTodo(newTodo)
        .subscribe(data => {
          console.log(data);
          this.todos = this.todos.concat(data);
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
      this.updateTodo(item);
    });
  }

  removeTodo(todo) {
    console.log('select:' + todo.id);
    this.dataSvc.removeTodo(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(item => item !== todo);
      });
  }
  z
  updateTodo(todo) {
    this.dataSvc.updateTodo(todo)
      .subscribe(data => {
        this.todos = [...this.todos];
      });
  }

  enterEditMode(todo) {
    console.log(todo);
    todo.editText = todo.text;
    todo.isEditMode = true;
  }

  leaveEditMode(todo) {
    delete todo.editText;
    delete todo.isEditMode;
    this.updateTodo(todo);
  }

  saveEdit(todo) {
    todo.text = todo.editText;
    this.leaveEditMode(todo);
  }
}
