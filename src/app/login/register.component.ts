import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';


import { UserService } from '../shared/index';

@Component({
    selector: 'register-cmp',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {

    emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    registerForm: FormGroup;
    email: FormControl;
    username: FormControl;
    firstname: FormControl;
    lastname: FormControl;
    password: FormControl;

    userService: UserService;
    router: Router;

    constructor(builder: FormBuilder, _userService: UserService, _router: Router) {
        this.userService = _userService;
        this.router = _router;
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern(this.emailRegex)
        ]);
        this.username = new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
        ]);
        this.firstname = new FormControl('', [
            Validators.required,
            Validators.maxLength(20)
        ]);
        this.lastname = new FormControl('', [
            Validators.required,
            Validators.maxLength(20)
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
        ]);
        this.registerForm = builder.group({
            email: this.email,
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password
        });
    }

    register() {
        console.log(this.registerForm.value)
        this.userService.Add(this.registerForm.value).subscribe(
            result => {
                this.router.navigate(['login']);
            },
            err => {
                console.log(err);
            })
    }
}
