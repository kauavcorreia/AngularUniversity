import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UniversityService } from '../../core/services/university.service';
import { University } from '../../core/models/university.interface';
import { UniversityCard } from '../../shared/components/university-card/university-card';
import { Dashboard } from '../../shared/components/dashboard/dashboard';
import { FavoritesService } from '../../core/services/favorites.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [UniversityCard, FormsModule, Dashboard, MatCardModule],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {

  private route = inject(ActivatedRoute);
  private service = inject(UniversityService);
  private favoritesService = inject(FavoritesService); 

  // estado base
  allUniversities: University[] = [];
  universities: University[] = [];

  // UI states
  loading = false;
  error = false;

  // filtro local
  filter = '';
  searchTerm = '';
  sortOrder = 'asc';

  constructor() {
    this.route.queryParams.subscribe(params => {
      const country = params['country'];

      if (country) {
        this.load(country);
      }
    });
  }

  // carregar API
  load(country: string) {
    this.loading = true;
    this.error = false;

    this.service.searchByCountry(country).subscribe({
      next: (data) => {
        this.allUniversities = data;
        this.universities = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  get totalUniversities(): number {
  return this.universities.length;
}

get totalDomains(): number {

  const domains = this.universities.flatMap(
    university => university.domains
  );

  return new Set(domains).size;
}

get totalFavorites(): number {
  return this.favoritesService.getFavorites().length;
}


  // filtro local (OBRIGATÓRIO no AGENTS.md)
  applyFilter() {
    const value = this.filter.toLowerCase().trim();

    if (!value) {
      this.universities = this.allUniversities;
      return;
    }

    this.universities = this.allUniversities.filter((u) =>
      u.name.toLowerCase().includes(value)
    );
  }

  // ordenação A-Z / Z-A (já exigido no AGENTS.md)
  sort() {
      if (this.sortOrder === 'asc') {
    this.universities.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else {
    this.universities.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }
    
    }
  }
