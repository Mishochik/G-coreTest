import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BookDescriptionRoutingModule } from './book-description-routing.module';
import { DetailedDescriptionComponent } from './book-description/book-description.component';

@NgModule({
    declarations: [
        DetailedDescriptionComponent
    ],
    imports: [
        CommonModule,
        BookDescriptionRoutingModule,
        TranslateModule.forChild()
    ]
})
export class BockDescriptionModule { }
