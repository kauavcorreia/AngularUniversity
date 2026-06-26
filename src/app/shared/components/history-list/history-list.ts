import { Component, inject } from '@angular/core';

import { HistoryService } from '../../../core/services/history.service';
import { SearchHistory } from '../../../core/models/search-history.interface';

@Component({
  selector: 'app-history-list',
  standalone: true,
  templateUrl: './history-list.html',
  styleUrl: './history-list.css',
})
export class HistoryList {

  private historyService = inject(HistoryService);

  history: SearchHistory[] = [];

  ngOnInit() {
    this.history = this.historyService.getHistory();
  }
}