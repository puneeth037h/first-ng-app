import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  roomImages: string[];
  services: string[];
  mapUrl: string;
}

@Injectable({
  providedIn: 'root' // Correctly provided globally, this is fine
})
export class HotelService {
  private apiUrl = 'http://localhost:8082/api/hotel';

  // Using constructor injection here
  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}
