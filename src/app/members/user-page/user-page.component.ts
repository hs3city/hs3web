import { UserService } from './../../shared/user/user.service';
import { User } from './../../shared/user/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  private user: User;

  constructor(private _route: ActivatedRoute, private  _userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._userService.GetByUsername(params['username']).subscribe((result) => {
        this.user = result;
      })
    });
  }

}
