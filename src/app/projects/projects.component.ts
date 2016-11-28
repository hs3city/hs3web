import { ProjectService, Project } from './../shared/project/index';
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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projects: Project[]

  constructor(private _router: Router, private _projectService: ProjectService) {

   }

  ngOnInit() {
  }

}
