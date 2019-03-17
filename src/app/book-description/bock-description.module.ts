import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BookDescriptionRoutingModule } from './book-description-routing.module';
import { DetailedDescriptionComponent } from './book-description/book-description.component';
import { TagComponent } from './tag/tag.component';


@NgModule({
    declarations: [
        DetailedDescriptionComponent,
        TagComponent
    ],
    imports: [
        BookDescriptionRoutingModule,
        CommonModule,
        MatListModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        TranslateModule.forChild()
    ]
})
export class BockDescriptionModule { }