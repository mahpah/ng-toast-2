import { Component } from '@angular/core'
import { ToastMan, Toast } from './toast-man.service'

@Component({
	selector: 'toast-container',
	templateUrl: './toast-container.component.jade',
	styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainer {
	constructor(
		private toastMan: ToastMan,
	) {}

	get toasts() {
		return this.toastMan.toasts
	}

	close(toast) {
		this.toastMan.close(toast)
	}
}
