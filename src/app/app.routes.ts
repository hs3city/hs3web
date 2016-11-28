import { ModuleWithProviders } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
