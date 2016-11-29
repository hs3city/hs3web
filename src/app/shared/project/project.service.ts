import { Auth } from './../auth/auth';
import { Project } from './project';
import { Configuration } from './../configuration/configuration';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {

  private projectsUrl: string;
  private projectMembersUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {

    this.projectsUrl = _configuration.ServerWithApiUrl + 'projects/';
    this.projectMembersUrl = _configuration.ServerWithApiUrl + 'projectMembers/';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public Add = (project: Project): Observable<Project> => {
    let toAdd = JSON.stringify(project);

    return this._http.post(this.projectsUrl, toAdd, { headers: this.headers })
      .map((response: Response) => <Project>response.json())
      .catch(this.handleError);
  }

  public AddUserToProject = (projectId: String, userId: String): Observable<Project> => {
    let relation: any = {}
    relation.userId = userId;
    relation.projectId = projectId;
    let toAdd = JSON.stringify(relation);

    return this._http.post(this.projectMembersUrl, toAdd, { headers: this.headers })
      .map((response: Response) => <Project>response.json())
      .catch(this.handleError);
  }

  public Get = (id: string): Observable<Project> => {
    return this._http.get(this.projectsUrl + id, { headers: this.headers })
      .map((response: Response) => <Project[]>response.json())
      .catch(this.handleError);
  }

  public GetAll = (): Observable<Project[]> => {
    return this._http.get(this.projectsUrl, { headers: this.headers })
      .map((response: Response) => <Project[]>response.json())
      .catch(this.handleError);
  }

  public GetAllWithOwners = (): Observable<Project[]> => {
    let filter = "filter[include]=owner"
    let searchParams = new URLSearchParams(filter)
    let options = new RequestOptions({
      headers: this.headers,
      search: searchParams
    })

    return this._http.get(this.projectsUrl, options)
      .map((response: Response) => <Project[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
