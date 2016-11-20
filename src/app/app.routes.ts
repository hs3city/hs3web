import { Routes } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './login/index';
import { HomeComponent } from './home/index';

export const routes: Routes = [
    { path: 'index', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: HomeComponent }
];
