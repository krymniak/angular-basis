import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorDirective } from './color.directive';

@Component({
	template:`
	<p appColor="yellow">text 1</p>
	<p appColor>text 2</p>
	`
})
class HostComponent {}

describe('ColorDirective', () => {
	let fixture: ComponentFixture<HostComponent>
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ColorDirective, HostComponent]
		})
		fixture = TestBed.createComponent(HostComponent)
		fixture.detectChanges
	})
  it('should create an instance', () => {
    const directive = new ColorDirective(null!);
    expect(directive).toBeTruthy();
  });

	it('should apply imput color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0]

		expect(de.nativeElement.style.backgroungColor).toBe('yellow')
  });

	it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1]
		let directive = de.injector.get(ColorDirective)
		expect(de.nativeElement.style.backgroungColor).toBe(directive.defaultColor)
  });
});
