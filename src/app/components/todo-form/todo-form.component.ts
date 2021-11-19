import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
//import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle?:string;

  constructor(private todoService:TodoService) { }
  
  ngOnInit(): void {
  }

  addTodoHandler(){
    const todo: Todo= {
        id:'uuidv4()',
        title:this.todoTitle,
        date: new Date(),
        isComplete:false
    }
    this.todoService.addTodo(todo);
  }

}
