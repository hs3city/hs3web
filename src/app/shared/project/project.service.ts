import { Auth } from './../auth/auth';
import { Project } from './project';
import { Configuration } from './../configuration/configuration';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {

    this.actionUrl = _configuration.ServerWithApiUrl + 'projects/';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public Add = (project: Project): Observable<Project> => {
    let toAdd = JSON.stringify(project);

    return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
      .map((response: Response) => <Project>response.json())
      .catch(this.handleError);
  }

  public GetAll = (): Observable<Project[]> => {

    return this._http.get(this.actionUrl, { headers: this.headers })
      .map((response: Response) => <Project[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
