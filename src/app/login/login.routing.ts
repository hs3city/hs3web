import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
];

export const loginRouting = RouterModule.forChild(loginRoutes);