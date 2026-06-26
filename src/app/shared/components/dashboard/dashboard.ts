import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  @Input() totalUniversities = 0;

  @Input()
  totalDomains = 0;

  @Input()
  totalFavorites = 0;

}
