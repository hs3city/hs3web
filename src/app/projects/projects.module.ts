import { NavigationModule } from './../navigation/navigation.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, NavigationModule],
    declarations: [ProjectsComponent, ProjectFormComponent],
    exports: [ProjectsComponent]
})

export class ProjectsModule { }

