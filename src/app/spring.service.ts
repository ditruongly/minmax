import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  private baseUrl = "http://localhost:8082/api/users";

  constructor(private http: HttpClient,
    private securityService: KeycloakService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`, {headers:
      new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        Authorization: 'Bearer ' + this.securityService.getToken()
      })});
  }
}
