import { UserPageComponent } from './user-page/user-page.component';
import { MembersComponent } from './members.component';
import { Routes, RouterModule } from '@angular/router';

const usersRoutes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'members/:username', component: UserPageComponent }
];

export const membersRouting = RouterModule.forChild(usersRoutes);