import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from './../navigation/navigation.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, NavigationModule, FormsModule, ReactiveFormsModule],
    declarations: [ProjectsComponent, ProjectFormComponent],
    exports: [ProjectsComponent]
})

export class ProjectsModule { }

