import { PublicHomeComponent } from './public-home/public-home.component';
import { AuthGuard } from './../shared/guards/auth.guard';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'index', component: HomeComponent }
];

export const homeRouting: ModuleWithProviders = RouterModule.forRoot(routes);
