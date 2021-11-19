import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[];
  constructor() { 
    this.todos =[
      {
        id:'001',
        title:'Learn Angular',
        isComplete: true,
        date: new Date()
      },
      {
        id:'002',
        title:'Learn React',
        isComplete: false,
        date: new Date()
      },
      {
        id:'003',
        title:'Learn Java',
        isComplete: true,
        date: new Date()
      }

    ];
  }

  addTodo(todo :Todo){
    this.todos.push(todo);
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
  
  changeStatus(todo: Todo){
    this.todos.map(item=>{
      if(item.id == todo.id){
        item.isComplete = !item.isComplete;
      }
    })
  }

  deleteTodo(todo:Todo){
    const index = this.todos.findIndex(
      (item) => {item.id == todo.id}
    );
    this.todos.splice(index, 1);
  }

}
