import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { ToastrModule } from '../src'

@NgModule({
	imports: [
		BrowserModule,
		ToastrModule.forRoot({
			timeAlive: 5000,
			maxNumberOfToasts: 3,
		})
	],

	declarations: [
		AppComponent,
	],

	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
