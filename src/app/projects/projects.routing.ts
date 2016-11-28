import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { Routes, RouterModule } from '@angular/router';

const usersRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'projects/new', component: ProjectFormComponent},
  { path: 'projects/:id', component: ProjectFormComponent}
];

export const projectsRouting = RouterModule.forChild(usersRoutes);