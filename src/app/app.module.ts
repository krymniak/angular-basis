import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TestComponenComponent } from './test-componen/test-componen.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
	declarations: [
		AppComponent,
		TestComponenComponent,
		PostComponent,
		PostFormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
