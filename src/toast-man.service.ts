import { Injectable } from '@angular/core'
import { ToastConfig } from './toast-config.class'

export interface Toast {
	title: string
	body: string
	timeout: number
	type: string
}

@Injectable()
export class ToastMan {
	toasts = [] as Array<Toast>
	private config: ToastConfig

	constructor(
		config: ToastConfig,
	) {
		this.config = Object.assign({
			timeAlive: 5000,
			maxNumberOfToasts: 3,
		}, config)
	}

	success(title, body, time?) {
		time = time || this.config.timeAlive
		return this.show(title, body, time, 'success')
	}

	error(title, body, time?) {
		time = time || this.config.timeAlive
		return this.show(title, body, time, 'error')
	}

	close(item: Toast) {
		clearTimeout(item.timeout)
		this.toasts = this.toasts.filter(t => t !== item)
	}

	show(title, body, timealive?, type = 'default') {
		let toast = {
			type,
			title,
			body,
			timeout: setTimeout(() => this.toasts = this.toasts.filter(t => t !== toast), timealive),
		} as Toast

		this.toasts  = [...this.toasts, toast].slice(-this.config.maxNumberOfToasts)
	}
}
