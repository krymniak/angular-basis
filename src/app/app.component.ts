import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// title = 'Dynamic title'
	// number = 42
	// arr = [1, 2, 3]
	// obj = { a: 1, b: { c: 2 } }
	// inputValue = ''
	// img = 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png'

	// constructor() {
	// setTimeout(() => {
	// 	this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
	// }, 5000)
	// }

	// onInput(event?: any) {
	// 	console.log('Event')
	// 	this.inputValue = event.target.value
	// }
	// onClick(){
	// 	console.log('click')
	// }
	// title = 'Initial'
	// onInput(event:any){
	// 	this.title = event.target.value
	// }

	// backgroundToggle: any = false


	// 	arr = [1, 1, 2, 3, 5, 8, 13]
	// 	objs = [
	// 		{title: 'Post1', author: 'Krymniak', comments: [
	// 			{name: 'Vitala', text:'lorem1'},
	// 			{name: 'Vitala', text:'lorem1'},
	// 			{name: 'Vitala', text:'lorem1'}
	// 		]},
	// 		{title: 'Post2', author: 'Krymniak', comments: [
	// 			{name: 'Vitala2', text:'lorem2'},
	// 			{name: 'Vitala2', text:'lorem2'},
	// 			{name: 'Vitala2', text:'lorem2'}
	// 		]}
	// 	]
	now: Date = new Date()

}
