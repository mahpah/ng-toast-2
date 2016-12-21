import { Component, ViewContainerRef } from '@angular/core'
import { ToastMan } from '../src'

@Component({
	selector: 'app',
	providers: [  ],
	// styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.jade',
})
export class AppComponent {
	constructor(
		private toastMan: ToastMan
	) {}

	show() {
		this.toastMan.success('afas', 'abcdefgh'[Math.round(Math.random() * 8)] + new Date().getSeconds())
	}
}
