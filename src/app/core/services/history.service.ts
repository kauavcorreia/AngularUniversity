import { Injectable } from '@angular/core';
import { SearchHistory } from '../models/search-history.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private readonly STORAGE_KEY = 'angular-university-history';

  saveSearch(country: string): void {

    const history = this.getHistory();

    history.unshift({
      country,
      searchDate: new Date().toISOString()
    });

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(history)
    );
  }

  getHistory(): SearchHistory[] {

    const data = localStorage.getItem(this.STORAGE_KEY);

    return data
      ? JSON.parse(data)
      : [];
  }
}