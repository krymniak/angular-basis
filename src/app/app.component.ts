import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	animations: [
		trigger('box', [
			state('start', style({background: 'blue'})),
			state('end', style({
				background: 'red', 
				transform: 'scale(1.2)'
			})),
			state('special', style({
				background: 'orange', 
				transform: 'scale(0.5)',
				borderRadius: '50%'
			})), 
			transition('start => end', animate(450)),
			transition('end => start', animate('800ms ease-in-out')),
			transition('special <=> *', [
				group([query('h4', animate(1500, style({
					fontSize: '.5rem',
					color: 'red'
				}))),
				style({ background: 'green'}),
				animate('1s', style({
					background: 'pink'
				})),
				animate(750)]),
			]),
			transition(':enter', [
				style({ opacity: 0}),
				animate('800ms ease-out')
			]),
			transition(':leave', [
				style({opacity: 1}),
				group([
					animate(750, style({
						opacity: 0,
						transform: 'scale(1.2)'
					})),
					animate(300, style({
						color: '#000',
						fontWeight: 'bold'
					}))
				]),
			])
		])
	]
})
export class AppComponent {
  boxState = 'start'
	visible = true
	animate() {
		this.boxState = this.boxState === 'end' ? 'start' : 'end'
	}
}
