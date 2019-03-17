import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import {MatListModule} from '@angular/material/list';

import { FavoriteBooksRoutingModule } from './favorite-books-routing.module';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';

@NgModule({
  declarations: [
    FavoriteBooksComponent
  ],
  imports: [
    CommonModule,
    FavoriteBooksRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    TranslateModule.forChild()
  ]
})
export class FavoriteBooksModule { }