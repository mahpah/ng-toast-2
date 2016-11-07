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

	success(title, body) {
		return this.show(title, body, 5000, 'success')
	}

	error(title, body) {
		return this.show(title, body, 5000, 'error')
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
