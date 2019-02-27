import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'FavoriteBooks', component: FavoriteBooksComponent },
    { path: '**', component: NotFoundComponent }
];
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FavoriteBooksComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
