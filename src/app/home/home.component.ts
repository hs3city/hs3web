import { AuthService } from './../shared/auth/auth.service';
import { NavigationComponent } from './../navigation/navigation.component';
import { UserService } from './../shared/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userService: UserService, private _authService: AuthService) {

  }

  ngOnInit() {
    console.log(this._authService.isLoggedIn());
  }

}
