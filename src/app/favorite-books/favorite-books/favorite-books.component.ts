import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-favorite-books',
    templateUrl: './favorite-books.component.html',
    styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

    favoriteList: Array<object>;
    bookList: Array<object> = [];
    tagsSelected;

    tags: Array<string> = [];
    tagModel = new FormControl();
    includedTags: Array<string> = [];

    constructor(
        protected router: Router
    ) { }

    loadTegs(bookList): Array<string> {
        const set =new Set();
        bookList.forEach((element) => {
            element.tags.forEach((tag) => set.add(tag.name));
        });

        return Array.from(set.values());
    }

    clickBook(book) {
        this.router.navigate([book.key]);
    }

    getNames(book) {
        return book.tags.map((tag) => tag.name).join(", ");
    }

    changeSelect() {
        this.bookList = this.favoriteList.filter((item: any) => item.tags.some(tag => this.tagsSelected.some(select => tag.name === select)));
    }

    ngOnInit() {
        const listFromLocalStorage = JSON.parse(localStorage.getItem('favoriteList'));
        this.favoriteList = Object.keys(listFromLocalStorage).map((key) => listFromLocalStorage[key]);
        this.tags = this.loadTegs(this.favoriteList);
    }

}
