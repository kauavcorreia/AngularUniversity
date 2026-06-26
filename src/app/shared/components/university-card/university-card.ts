import { Component, Input, inject } from '@angular/core';
import { University } from '../../../core/models/university.interface';
import { FavoritesService } from '../../../core/services/favorites.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-university-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './university-card.html',
  styleUrl: './university-card.css',
})
export class UniversityCard {

  @Input() university!: University;

  private favoritesService = inject(FavoritesService);

  toggleFavorite() {
    if (this.isFavorite()) {
      this.favoritesService.removeFavorite(this.university);
    } else {
      this.favoritesService.addFavorite(this.university);
    }
  }

  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.university);
  }

  openSite(url: string) {
    window.open(url, '_blank');
  }
}