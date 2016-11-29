import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from './../navigation/navigation.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
    imports: [CommonModule, RouterModule, NavigationModule, FormsModule, ReactiveFormsModule],
    declarations: [ProjectsComponent, ProjectFormComponent, ProjectPageComponent],
    exports: [ProjectsComponent]
})

export class ProjectsModule { }

