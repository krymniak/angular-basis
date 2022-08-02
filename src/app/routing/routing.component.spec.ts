import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { RoutingComponent } from './routing.component';

class RouterStub {
	navigate(path: any[]) {}
}

class ActivatedRouteStub {
	private subject = new Subject<Params>()

	push(params: Params) {
		this.subject.next(params)
	}
	get params() {
		return this.subject.asObservable()
	}
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
			providers: [
				{provide: Router, useClass: RouterStub},
				{provide: ActivatedRoute, useClass: ActivatedRouteStub}
			]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
		fixture.autoDetectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('should navigate to posts if go back', () => {
    let router = TestBed.get(Router)
		let spy = spyOn(router, 'navigate')

		expect(spy).toHaveBeenCalledWith(['/posts'])
  });

	it('should navigate to 4040 if id = 0', () => {
    let router = TestBed.get(Router)
		let route: ActivatedRouteStub = TestBed.get(ActivatedRoute)
		let spy = spyOn(router, 'navigate')

		route.push({id: '0'})
		expect(spy).toHaveBeenCalledWith(['/404'])
  });
});
