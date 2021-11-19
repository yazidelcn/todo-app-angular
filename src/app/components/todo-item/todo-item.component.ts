import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[] =[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos:Todo[]) => {this.todos = todos;}
    )
  }

  onChangeStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }

  onDelete(todo:Todo){
    this.todoService.deleteTodo(todo);
  }
}
