import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  userService: UserService;

    constructor(private _userService: UserService) {
        this.userService = _userService;
    }

    public login = (credentials: Object) => {
        return this.userService.Login(credentials).subscribe(
            result => {
                localStorage.setItem('jwt', result.id);
                this.userService.GetSingle(result.userId).subscribe(
                    result => {
                        localStorage.setItem('profile', JSON.stringify(result));
                    },
                    err => {
                        console.log(err)
                    }
                )
            },
            err => {
                console.log(err);
            })
    }

}
