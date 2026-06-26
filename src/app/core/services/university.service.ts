import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { University } from '../models/university.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private http = inject(HttpClient);

  searchByCountry(
    country: string
  ): Observable<University[]> {

    return this.http.get<University[]>(
      `${environment.apiUrl}?country=${country}`
    );
  }
}