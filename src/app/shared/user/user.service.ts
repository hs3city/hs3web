import { Auth } from './../auth/auth';
import { User } from './user';
import { Configuration } from './../configuration/configuration';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {

    this.actionUrl = _configuration.ServerWithApiUrl + 'users/';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', '');
  }

  public GetAll = (): Observable<User[]> => {

  let jwt = localStorage.getItem('jwt')
  this.headers.set('Authorization', jwt);

    return this._http.get(this.actionUrl, {headers: this.headers})
      .map((response: Response) => <User[]>response.json())
      .catch(this.handleError);
  }

  public GetSingle = (id: string): Observable<User> => {

  let jwt = localStorage.getItem('jwt')
  this.headers.set('Authorization', jwt);

    return this._http.get(this.actionUrl + id, { headers: this.headers})
      .map((response: Response) => <User>response.json())
      .catch(this.handleError);
  }

  public GetByUsername = (username: string): Observable<User> => {

  let jwt = localStorage.getItem('jwt')
  this.headers.set('Authorization', jwt);
  let filter = "filter[where][username]=" + username
  
  let searchParams = new URLSearchParams(filter)
  let options = new RequestOptions({
    headers: this.headers,
    search: searchParams
  })

    return this._http.get(this.actionUrl + 'findone', options)
      .map((response: Response) => <User>response.json())
      .catch(this.handleError);
  }

  public Add = (user: User): Observable<User> => {
    let toAdd = JSON.stringify(user);

    return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
      .map((response: Response) => <User>response.json())
      .catch(this.handleError);
  }

  public Login = (credentials: Object): Observable<Auth> => {
    let toLogin = JSON.stringify(credentials);

    return this._http.post(this.actionUrl + "/login", toLogin, { headers: this.headers })
      .map((response: Response) => <User>response.json())
      .catch(this.handleError);
  }

  public Update = (id: number, itemToUpdate: User): Observable<User> => {
    return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
      .map((response: Response) => <User>response.json())
      .catch(this.handleError);
  }

  public Delete = (id: number): Observable<Response> => {
    return this._http.delete(this.actionUrl + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
