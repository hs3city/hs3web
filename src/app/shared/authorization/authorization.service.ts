import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User, UserService } from '../.';

@Injectable()
export class AuthorizationService {

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