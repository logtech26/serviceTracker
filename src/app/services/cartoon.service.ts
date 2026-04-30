import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartoonCharacter } from '../character.model';

@Injectable({
  providedIn: 'root'
})
export class CartoonService {


  private cartoonApiUrl = `https://dragonball-api.com/api/characters`;

  constructor(private http: HttpClient) { }

  getCartooCharacter(): Observable<CartoonCharacter> {
    return this.http.get<CartoonCharacter>(this.cartoonApiUrl);

  }
}
