import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { Routes, RouterModule } from '@angular/router';

const usersRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectPageComponent},
  { path: 'projects/:id/edit', component: ProjectFormComponent},
  { path: 'projects/new', component: ProjectFormComponent}
];

export const projectsRouting = RouterModule.forChild(usersRoutes);