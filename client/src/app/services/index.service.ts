import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient }          from '../services/http.client';
import 'rxjs/add/operator/toPromise';
import {Subject, Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class IndexService {
  private serverUrl = 'http://localhost:3000/instagram/api/v1/';  // URL to web api
  constructor(private http: HttpClient ) {}

  /**
   *
   * @returns {Maybe<T>|Promise<TResult|T>|Promise<T>|any|Promise<R>}
   */

  getAllUsers(count: number) {
    let params = new URLSearchParams();
    params.set('count', count.toString());
    return this.http.get(this.serverUrl + 'users')
      .map(data => {
        return data.json();
      });
  }

  loginWithInstagram() {
    return this.http.get(this.serverUrl + 'users/loginInstagram')
      .map(data => {
        return data.json();
      });
  }

}
