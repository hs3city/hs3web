import { ProjectService, Project } from './../../shared/project/index';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectForm: FormGroup;
  name: FormControl;
  description: FormControl;

  constructor(private _router: Router, private _projectService: ProjectService, builder: FormBuilder) {
    this.name = new FormControl('', [
      Validators.required
    ])
    this.description = new FormControl('', [
      Validators.required
    ])
    this.projectForm = builder.group({
      name: this.name,
      description: this.description
    })
   }


  ngOnInit() {
  }

  save() {
      let project: Project = this.projectForm.value;
      project.ownerId = localStorage.getItem('currentUser');
      this._projectService.Add(project).subscribe((result) => {
        this._router.navigate(['../projects'])
      }, (err) => {
        console.log(err);
      })
  }

}
