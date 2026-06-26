import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../core/services/favorites.service';
import { University } from '../../core/models/university.interface';
import { UniversityCard } from '../../shared/components/university-card/university-card';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    UniversityCard,
    MatCardModule
  ],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {

  private favoritesService = inject(FavoritesService);

  favorites: University[] = [];

  constructor() {
    this.favorites = this.favoritesService.getFavorites();
  }
}