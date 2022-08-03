import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { of } from "rxjs";
import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";

describe('PostsComponent', () => {
	let fixture : ComponentFixture<PostsComponent>
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    TestBed.configureTestingModule({
			declarations: [PostsComponent],
			providers: [PostsService],
			imports: [HttpClientModule]
		})

		fixture = TestBed.createComponent(PostsComponent)
		component = fixture.componentInstance
		service = TestBed.get(PostsService)
  })

	xit('shoupd fetch posts on ngOnInit', () => {
		const posts = [1,2,3]
		spyOn(service, 'fetch').and.returnValue(of(posts))
		fixture.detectChanges()
		expect(component.posts).toEqual(posts)
	})

	it('shoupd fetch posts on ngOnInit promise', fakeAsync(() => {
		const posts = [1,2,3]
		spyOn(service, 'fetchPromise').and.returnValue(Promise.resolve(posts))
		tick()
		expect(component.posts.length).toBe(posts.length)
		// fixture.detectChanges()
		// fixture.whenStable().then(() => {
		// 	expect(component.posts.length).toBe(posts.length)
		// })
		

	}))
})
