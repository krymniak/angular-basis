import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate, CanActivateChild{
	
	constructor(
		public authService: AuthService,
		public router: Router) {

	}
	canActivate(
		route: ActivatedRouteSnapshot, 
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | any{
		return this.authService.isAuthenticated().then(isAuth => {
			if(isAuth) {
				return true
			} else {
				return this.router.navigate(['/'], {
					queryParams: {
						auth: false
					}
				})
			}
		})
	}
	canActivateChild(
		route: ActivatedRouteSnapshot, 
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | any {
		return this.canActivate(route, state)
	}
}