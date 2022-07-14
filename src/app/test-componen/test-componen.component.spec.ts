import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponenComponent } from './test-componen.component';

describe('TestComponenComponent', () => {
  let component: TestComponenComponent;
  let fixture: ComponentFixture<TestComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
