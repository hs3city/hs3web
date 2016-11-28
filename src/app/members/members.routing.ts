import { MembersComponent } from './members.component';
import { Routes, RouterModule } from '@angular/router';

const usersRoutes: Routes = [
  { path: 'members', component: MembersComponent }
];

export const membersRouting = RouterModule.forChild(usersRoutes);