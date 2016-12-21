import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToastMan } from './toast-man.service'
import { ToastContainer } from './toast-container.component'
import { ToastConfig } from './toast-config.class'

@NgModule({
	imports: [
		CommonModule,
	],

	providers: [],

	declarations: [
		ToastContainer,
	],

	exports: [
		ToastContainer,
	],
})
export class ToastrModule {
	static forRoot(config: ToastConfig): ModuleWithProviders {
		return {
			ngModule: ToastrModule,
			providers: [
				ToastMan,
				{ provide: ToastConfig, useValue: config }
			],
		}
	}
}
