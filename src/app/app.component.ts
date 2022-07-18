import { Component } from '@angular/core';
export interface Post {
	title: string
	text: string
	id?: number
}
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	posts: Post[] = [
		{title: 'Want to learn Angular components', text:'I am still learning', id:1},
		{title: 'Next block', text:'Will be about derectives and pipes', id:2}
	]
}
