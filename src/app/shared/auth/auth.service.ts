import { UserService, User } from './../user/index';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {

    userService: UserService;
     public token: string;

    constructor(private _userService: UserService, private http: Http) {
        this.userService = _userService;
    }

    public login = (credentials: Object): Observable<User> => {
        return this.userService.Login(credentials)
        .flatMap((result) => {
            localStorage.setItem('jwt', result.id);
            return this.userService.GetSingle(result.userId).map((user) => {
                localStorage.setItem('currentUser', user.id);
                return user;
            });
        });
    }

    public logout = () => {
        localStorage.removeItem('currentUser');
		localStorage.removeItem('jwt');
    }

    public isLoggedIn = () : boolean => {
        return localStorage.getItem('currentUser') != undefined
    }
}
