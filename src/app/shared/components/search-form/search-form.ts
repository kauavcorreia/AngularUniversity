import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
],
  
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm {

  country = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.country);
  }
}