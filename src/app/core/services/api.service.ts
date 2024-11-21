import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getClients(pageNumber?: number, pageSize?: number): Observable<any> {
    let params = new HttpParams();
    if (pageNumber) {
      params = params.append('PageNumber', pageNumber.toString());
    }
    if (pageSize) {
      params = params.append('PageSize', pageSize.toString());
    }
    return this.http.get(`${this.baseUrl}/clients`, { params });
  }
}
