import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AuthService } from '../shared/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authorizationService: AuthService;
  router: Router;
  loginForm: FormGroup;
  emailOrUsername: FormControl;
  password: FormControl;

  constructor(builder: FormBuilder, _router: Router, _authorizationService: AuthService) {
    this.router = _router;
    this.authorizationService = _authorizationService;
    this.emailOrUsername = new FormControl('', [
      Validators.required
    ])
    this.password = new FormControl('', [
      Validators.required
    ])
    this.loginForm = builder.group({
      email: this.emailOrUsername,
      username: this.emailOrUsername,
      password: this.password
    })

  }

  login() {
     
    if(this.authorizationService.login(this.loginForm.value)){
      
    }else{
        this.loginForm.errors['loginError'] = true;
    }
  }

  ngOnInit() {

  }

}
