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
		this.toastMan.success('afas', 'asdfsadf', 1000000)
	}
}
