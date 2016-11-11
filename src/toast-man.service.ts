import { Injectable } from '@angular/core'

export interface Toast {
	title: string
	body: string
	timeout: number
	type: string
}

@Injectable()
export class ToastMan {
	toasts = [] as Array<Toast>

	success(title, body, time = 5000) {
		return this.show(title, body, time, 'success')
	}

	error(title, body, time = 5000) {
		return this.show(title, body, time, 'error')
	}

	close(item: Toast) {
		clearTimeout(item.timeout)
		this.toasts = this.toasts.filter(t => t !== item)
	}

	show(title, body, timealive, type = 'default') {
		let toast = {
			type,
			title,
			body,
			timeout: setTimeout(() => this.toasts = this.toasts.filter(t => t !== toast), timealive),
		} as Toast

		this.toasts  = [...this.toasts, toast]
	}
}
