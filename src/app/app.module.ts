import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		PostsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
