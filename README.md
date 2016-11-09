# Toast component for your angular2 project

## Manual
Import `ToastrModule` to your main module and call `forRoot`

```
import { ToastrModule } from 'ng-toast-2'

@NgModule({
	imports: [
		ToastrModule.forRoot(),
	]
})
class MainModule {}
```

Include `toast-container` some where in your template

```
<router-outlet/>
<toast-container/>
```

Show toast by calling ToastManager's method

```
@Component({
	// ...
})
class SomeComponent {
	constructor(
		private toastMan: ToastManager
	) {
		this.toastMan.success('title', 'body')
	}
}
```

## License
```
					DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
									Version 2, December 2004

Copyright (C) 2016 DgmTeam <contact@digimed.vn>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

					DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
	TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
```
