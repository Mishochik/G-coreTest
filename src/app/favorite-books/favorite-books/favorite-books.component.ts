import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-favorite-books',
    templateUrl: './favorite-books.component.html',
    styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

    tags: Array<string> = ['Tag', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag'];
    tagModel = new FormControl();

    constructor() { }

    ngOnInit() {
    }

}
