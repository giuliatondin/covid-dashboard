import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly url = 'https://covid19-brazil-api.now.sh/api/report/v1/';
  readonly urlFlag = 'https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/';

  constructor(private http: HttpClient) { }

  getBrazilList(): Observable<any>{
    return this.http.get(this.url);
  }

  getPerState(initials: any): Observable<any> {
    return this.http.get(`${this.url}brazil/uf/${initials}`);
  }

  getPerCountry(name: any): Observable<any>{
    return this.http.get(`${this.url}${name}`);
  }

  getStateFlag(initials: string): Observable<any>{
    return this.http.get(`${this.urlFlag}${initials}.png`); 
  }

}
