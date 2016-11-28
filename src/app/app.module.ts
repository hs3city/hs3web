import { NavigationModule } from './navigation/navigation.module';
import { MembersModule } from './members/members.module';
import { projectsRouting } from './projects/projects.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';

import { loginRouting } from "./login/login.routing";
import { membersRouting } from './members/members.routing';
import { homeRouting } from './home/home.routes';
import { routing } from './app.routes';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    NavigationModule,
    LoginModule,
    HomeModule,
    ProjectsModule,
    MembersModule,
    loginRouting,
    homeRouting,
    projectsRouting,
    membersRouting,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
