import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	form: any = FormGroup
	ngOnInit() {
		this.form = new FormGroup({
			email: new FormControl('', [
				Validators.email,
				Validators.required,
				MyValidators.restrictedEmails
			], [MyValidators.uniqEmail as AsyncValidatorFn]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(6)
			]),
			address: new FormGroup({
				country: new FormControl('ua'),
				city: new FormControl('', Validators.required)
			}),
			skills: new FormArray([],)
		})
	}
	submit() {
		if (this.form.valid) {
			console.log('Submitted form', this.form)
			const formData = { ...this.form.value }
			console.log('Form Data', formData)
		}
	}
	setCapital() {
		const cityMap = {
			us: 'Washington',
			uk: 'London',
			ua: 'Kyiv'
		}
		const cityKey: any = this.form.get('address')?.get('country')?.value
		const city: string = cityMap[cityKey as keyof typeof cityMap]
		this.form.patchValue({
			address: { city }
		})
	}
	addSkill() {
		const control = new FormControl('', Validators.required);
		(this.form.get('skills') as FormArray).push(control)
	}
}
