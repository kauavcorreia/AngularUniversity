import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchForm } from '../../shared/components/search-form/search-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private router = inject(Router);

  onSearch(country: string) {
    this.router.navigate(['/results'], {
      queryParams: { country }
    });
  }
}