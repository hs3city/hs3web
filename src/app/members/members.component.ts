import { UserService } from './../shared/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private _userService: UserService) {
    
   }

  ngOnInit() {
    this._userService.GetAll().subscribe((result) => {
      console.log(result)
    }, (error) => {
      console.log(error)
    });
  }

}
