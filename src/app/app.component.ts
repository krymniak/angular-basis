import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { delay, pipe } from 'rxjs';
export interface Todo {
	completed: boolean
	title: string
	id?: number
}
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	todos: Todo[] = []
	loading = false
	todoTitle = ''

	constructor(private http: HttpClient) {

	}
	ngOnInit() {
		this.fetchTodos()
	}
	addTodo() {
		if (!this.todoTitle.trim()) {
			return
		}
		const newTodo: Todo = {
			title: this.todoTitle,
			completed: false
		}
		this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
			.subscribe(todo => {
				this.todos.push(todo)
				this.todoTitle = ''
			})
	}
	fetchTodos() {
		this.loading = true
		this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
			.pipe(delay(1500))
			.subscribe(response => {
				console.log(response)
				this.todos = response
				this.loading = false
			})
	}
}
