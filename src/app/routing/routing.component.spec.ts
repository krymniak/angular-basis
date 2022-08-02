import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RoutingComponent } from './routing.component';

class RouterStub {
	navigate(path: any[]) {}
}

class ActivatedRouteStub {
	params!: Observable<any>
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('should navigate to posts if go back', () => {
    let router = TestBed.get(Router)
		let spy = spyOn(router, 'navigate')

		expect(spy).toHaveBeenCalledWith(['/posts'])
  });
});
