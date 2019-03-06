import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private booksService: BooksService) {

    }
    rows;
    pagination = {
        limit: 10,
        page: 1,
    }
    onChanged(increased) {
        this.booksService.search(increased, this.pagination).subscribe(response => {
            this.rows = response;
            console.log(response);
        });
    }

    ngOnInit() {
    }

}