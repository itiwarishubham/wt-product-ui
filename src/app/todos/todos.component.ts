import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todos: Todos[] = [
    new Todos("Create Todo App", true),
    new Todos("Create Product List", true),
    new Todos("Create Product Details", true)
  ]

  ngOnInit(): void {
  }

  getAllTasks(): Todos[] {
    return this.todos
  }

  addTask(taskName: string): void {
    if (taskName != '')
      this.todos.push(new Todos(taskName, false))
  }

}
