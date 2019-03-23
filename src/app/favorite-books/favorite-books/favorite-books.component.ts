import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-favorite-books',
    templateUrl: './favorite-books.component.html',
    styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

    favoriteList: object = JSON.parse(localStorage.getItem('favoriteList'));
    bookList: Array<object> = Object.keys(this.favoriteList).map((key) => this.favoriteList[key]);

    tags: Array<string> = this.getTagsList(this.bookList);
    tagModel = new FormControl();

    constructor(
        protected router: Router
    ) { }

    getTagsList(bookList): Array<string> {
        const tagsList = [];
        bookList.forEach((element) => {
            element.tags.forEach((element) => {
                if (this.checkRepeat(tagsList, element.name))
                    tagsList.push(element.name);
            });
        });
        return tagsList;
    }

    checkRepeat(arr, name) {
        let check = true;
        if (!arr.length)
            return check;
        arr.forEach((element) => {
            if (element === name)
                check = false
        })
        return check;
    }

    clickBook(book) {
        this.router.navigate([book.key]);
    }

    getNames(book) {
        return book.tags.map((tag) => tag.name).join(", ");
    }

    clickTag(tags) {
        debugger;

    }

    ngOnInit() {
    }

}
