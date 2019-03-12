import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedDescriptionComponent } from './book-description/book-description.component';

const routes: Routes = [
    { path: 'description', component: DetailedDescriptionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookDescriptionRoutingModule { }
