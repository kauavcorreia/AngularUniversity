import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { SearchForm } from '../../shared/components/search-form/search-form';
import { HistoryService } from '../../core/services/history.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchForm,],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private router = inject(Router);
  private historyService = inject(HistoryService);

  onSearch(country: string) {

    this.historyService.saveSearch(country);

    this.router.navigate(['/results'], {
      queryParams: { country }
    });

  }
}