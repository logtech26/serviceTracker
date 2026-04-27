import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APiResponse, Character, User } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class HealthSystemService {
   private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API URL
   private apiGaming = `https://dragonball-api.com/api/characters?page={page}&limit=5`;  
   private mockData = 'https://69ee06f39163f839f8926a1d.mockapi.io/api/v1/users';
   

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getGamingCharacter(page: number): Observable<APiResponse> {
    return this.http.get<APiResponse>(this.apiGaming);
  }

  getMockData(page: number): Observable<User[]> {
    return this.http.get<User[]>(this.mockData);
  }
}

