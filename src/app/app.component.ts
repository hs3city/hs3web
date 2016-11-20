import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app works!';
//   private users: User[];

  constructor(
    //   private _userService: UserService
  ) { }

  ngOnInit(){
    //   this.getAllItems();
  }

//   private getAllItems(): void {
//         this._userService
//             .GetAll()
//             .subscribe((data:User[]) => this.users = data,
//                 error => console.log(error),
//                 () => console.log('Get all Items complete'));
//     }
}
