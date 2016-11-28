import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  add_new_project(event){
    this._router.navigate(['new-project'])
  }

}
