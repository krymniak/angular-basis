import { Injectable } from "@angular/core"
import { LogService } from "./log.service"

@Injectable({
	providedIn: 'root'
})
export class AppCounterService {
	counter = 0
	constructor(public logServisec: LogService) {

	}
	increase() {
		this.logServisec.log('increase counter')
		this.counter++
	}

	decrease() {
		this.logServisec.log('decrease counter')
		this.counter--
	}
}