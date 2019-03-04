import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteBooksRoutingModule } from './favorite-books-routing.module';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FavoriteBooksComponent
  ],
  imports: [
    CommonModule,
    FavoriteBooksRoutingModule,
    FormsModule
  ]
})
export class FavoriteBooksModule { }
