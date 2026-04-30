import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APiResponse, Character, User } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class HealthSystemService {
   private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API URL
  // private apiGaming = `https://dragonball-api.com/api/characters?page={page}&limit=5`;  
   private apiGaming = `https://dragonball-api.com/api/characters`;  
   

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getGamingCharacter(): Observable<APiResponse> {
    return this.http.get<APiResponse>(this.apiGaming);
  }

}

