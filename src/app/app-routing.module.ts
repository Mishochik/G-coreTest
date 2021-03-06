import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'books/:id',
        loadChildren: './book-description/bock-description.module#BockDescriptionModule'
    },
    {
        path: 'favorite-books',
        loadChildren: './favorite-books/favorite-books.module#FavoriteBooksModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
