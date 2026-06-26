import { Injectable } from '@angular/core';
import { University } from '../models/university.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: University[] = [];

  getFavorites(): University[] {
    return this.favorites;
  }

  addFavorite(university: University): void {
    this.favorites.push(university);
  }

  removeFavorite(university: University): void {
    this.favorites = this.favorites.filter(
      u => u.name !== university.name
    );
  }

  isFavorite(university: University): boolean {
    return this.favorites.some(
      u => u.name === university.name
    );
  }
}