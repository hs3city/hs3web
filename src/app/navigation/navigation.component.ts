import { Router } from '@angular/router';
import { AuthService } from './../shared/auth/auth.service';
import { UserService } from './../shared/user/user.service';
import { User } from './../shared/user/user';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: 'navigation.component.html'
})

export class NavigationComponent implements OnInit {

	private user: User;
	private loggedIn: boolean;

	constructor(private _userService: UserService, private _authService: AuthService, private _router: Router) {
		this.user = new User();
		this.loggedIn = false;
	}

	ngOnInit() {
		if (this._authService.isLoggedIn()) {
			this._userService.GetSingle(localStorage.getItem('currentUser')).subscribe((result) => {
				this.user = result;
				this.loggedIn = true;
			})
		}
	}

	logout(event) {
		this._authService.logout()
		this.loggedIn = false;
	}
	// changeTheme(color: string): void {
	// 	var link: any = $('<link>');
	// 	link
	// 		.appendTo('head')
	// 		.attr({ type: 'text/css', rel: 'stylesheet' })
	// 		.attr('href', 'themes/app-' + color + '.css');
	// }

	// rtl(): void {
	// 	var body: any = $('body');
	// 	body.toggleClass('rtl');
	// }

	// sidebarToggler(): void {
	// 	var sidebar: any = $('#sidebar');
	// 	var mainContainer: any = $('.main-container');
	// 	sidebar.toggleClass('sidebar-left-zero');
	// 	mainContainer.toggleClass('main-container-ml-zero');
	// }
}
