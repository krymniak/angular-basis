import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	post?: Post
	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public postsService: PostsService) {

	}
	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			console.log(params)
			this.post = this.postsService.getById(+params?.['id'])
		})
	}
	loadPost() {
		this.router.navigate(['/posts', 44])
	}
}
