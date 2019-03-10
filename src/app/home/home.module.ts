import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ColumnsComponent } from './columns/columns.component';
import { SubjectsComponent } from './subjects/subjects.component';



@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        ColumnsComponent,
        SubjectsComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        TranslateModule.forChild()
    ],
})
export class HomeModule { }
