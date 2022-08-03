import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges{

	defaultColor = 'blue'
	@Input('appColor') color!: string

  constructor(private el: ElementRef) { }

	ngOnChanges(): void {
		this.el.nativeElement.style.backgroungColor = this.color || this.defaultColor
	}
}
