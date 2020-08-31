import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Profile } from '../profile';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // profiles: Profile;

  private userName: string;

  constructor(private http: HttpClient) {
    this.userName = 'profnandaa';
  }

  getProfile(): Observable<any> {
    const url = 'https://api.github.com/users/';
    return this.http.get(url + this.userName + '?access_token=' + environment.apiKey);
  }

  getPublicRepos(): Observable<any> {
    const url = 'https://api.github.com/users/';
    return this.http.get(url + this.userName + '/repos?access_token=' + environment.apiKey);
  }
}
