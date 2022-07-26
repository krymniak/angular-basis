import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { delay, pipe } from 'rxjs';
import { Todo, TodosService } from './todos.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	todos: Todo[] = []
	loading = false
	todoTitle = ''

	constructor(private todosService: TodosService) {

	}
	ngOnInit() {
		this.fetchTodos()
	}
	addTodo() {
		if (!this.todoTitle.trim()) {
			return
		}
		this.todosService.addTodo({
			title: this.todoTitle,
			completed: false
		}).subscribe(todo => {
			this.todos.push(todo)
			this.todoTitle = ''
		})

	}
	fetchTodos() {
		this.loading = true
		this.todosService.fetchTodos()
			.subscribe(response => {
				console.log(response)
				this.todos = response
				this.loading = false
			})
	}
	removeTodo(id: number) {
		this.todosService.removeTodo(id)
			.subscribe(() => {
				this.todos = this.todos.filter(t => t.id !== id)
			})
	}
}
