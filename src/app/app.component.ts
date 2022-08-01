import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { ModalComponent } from './modal/modal.component'
import { RefDirective } from './ref.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild(RefDirective) refDir!: RefDirective

	constructor(
		private resolver: ComponentFactoryResolver,
		private title: Title,
		private meta: Meta
		) {
			const t = title.getTitle
			title.setTitle('App Component Page')
			meta.addTags([
				{name:'keywords', content: 'Angular'},
				{name: 'description', content: 'AppComponent'}
			])
	}
	showModal() {
		const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
		this.refDir.containerRef.clear()
		const component = this.refDir.containerRef.createComponent(modalFactory)
		component.instance.title = 'Dinamic title'
		component.instance.close.subscribe(() => {
			this.refDir.containerRef.clear()
		})
	}
}

