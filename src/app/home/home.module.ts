import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ColumnsComponent } from './columns/columns.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';
// import { PaginationComponent } from '../pagination/pagination.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ColumnsComponent,
    SubjectsComponent,
    TableComponent,
    PaginationComponent,
    // PaginationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
