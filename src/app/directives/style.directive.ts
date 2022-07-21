
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
	selector: '[appStyle]'
})

export class StyleDirective {
@Input('appStyle') color: string = 'blue'
@Input() dStyles!: {border?: string, fontWeight?: string, borderRadius?: string}

	@HostBinding('style.color') elColor:any = null
	constructor(private el:ElementRef, private r:Renderer2) {
		

	}
	@HostListener('click', ['$event']) onClick(event: Event) {

	}
	@HostListener('mouseenter') onEnter() {
		this.elColor = this.color
		//this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
	}
	@HostListener('mouseleave') onLeave() {
		this.elColor = null
		//this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
	}
}
