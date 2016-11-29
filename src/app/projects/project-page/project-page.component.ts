import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, Project } from './../../shared/project/index';
import { UserService } from './../../shared/user/index';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  private project: Project;

  constructor(private _route: ActivatedRoute, private _projectService: ProjectService, private _userService: UserService) {
    localStorage.getItem('currentUser')
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._projectService.Get(params['id']).subscribe((result) => {
        this.project = result;
      })
    });
  }

  enroll() {
    this._projectService.AddUserToProject(this.project.id, localStorage.getItem('currentUser')).subscribe((result) => {
      console.log(result)
    })
  }

}
