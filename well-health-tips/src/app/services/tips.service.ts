import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipsService {

  constructor(private http: HttpClient) {}

  public getTipsList(): Observable<any> {
    return this.http.get(environment.api_url + '/tips/random');
  }

  public getTip(id: string): Observable<any> {
    return this.http.get(environment.api_url + '/tips/' + id);
  }

  public upVoteTip(id: number): Observable<any> {
    console.log('upvote');
    const body = {};
    return this.http.put(environment.api_url + '/tips/' + id.toString() + '/vote/up', body);
  }

  public downVoteTip(id: number): Observable<any> {
    console.log('downvote');
    const body = {};
    return this.http.put(environment.api_url + '/tips/' + id.toString() + '/vote/down', body);
  }
}
