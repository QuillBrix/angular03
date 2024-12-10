import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random'; // Updated API URL

  constructor(private http: HttpClient) {}

  getApiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Fetch data from the new API
  }
}
