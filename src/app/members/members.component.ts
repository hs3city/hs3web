import { UserService } from './../shared/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/index'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  private users: User[];

  constructor(private _userService: UserService) {
    this._userService.GetAll().subscribe((result) => {
      this.users = result;
    }, (error) => {
      console.log(error)
    });
   }

  ngOnInit() {
    console.log(this.users)
  }

}
