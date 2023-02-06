import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipsService {

  constructor(private http: HttpClient) {}

  public async getTipsList(): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/tips/random').pipe(finalize(() => {})).subscribe(res => {
        if (res) {
          resolve(res);
        } else {
          reject();
        }
      });
    })
  }
}
