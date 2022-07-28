import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { delay, Observable, of } from "rxjs";
import { Post, PostsService } from "./posts.service";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post>{
	constructor(public postsService: PostsService) {

	}
	resolve(
		route: ActivatedRouteSnapshot, 
		state: RouterStateSnapshot
		): Post | Observable<Post> | Promise<Post> | any{
		return of(this.postsService.getById(+route.params?.['id']))
		.pipe(delay(1500))
	}
}