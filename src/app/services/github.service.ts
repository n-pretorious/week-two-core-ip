import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'https://api.github.com/users';
    // return this.http.get<any>(`${environment.apiKey}`);
    return this.http.get<any>(url);
  }
}
