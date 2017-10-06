import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  private apiBase = 'http://localhost:3000/todos';

  getTodos() {
    return this.http.get<any[]>(this.apiBase);
  }

  addTodo(todo) {
    return this.http.post(this.apiBase, todo);
  }

  removeTodo(todo){
    return this.http.delete(this.apiBase,todo);
  }

  updateTodo(todo){
    return this.http.put(`${this.apiBase}/${todo.id}`,todo);
  }
}
