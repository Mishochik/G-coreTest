import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ColumnsComponent } from './columns/columns.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        ColumnsComponent,
        SubjectsComponent,
        TableComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatInputModule
    ]
})
export class HomeModule { }
