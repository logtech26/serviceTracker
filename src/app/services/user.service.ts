import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../character.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userDataUrl = 'https://69ee06f39163f839f8926a1d.mockapi.io/api/v1/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userDataUrl)
  }
}
