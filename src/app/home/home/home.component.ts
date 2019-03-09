import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    pagination = {
        limit: 10,
        page: 1,
    }

    rows:Array<any> = [];

    constructor(private booksService: BooksService) {

    }


    onChanged(increased) {
        console.log("increased=>",increased);
        this.booksService
            .search(increased, this.pagination)
            .subscribe(response => {
                // this.rows.push(...response) ;
            });
    }

    ngOnInit() {
    }

    updatePagination({numFound,}){

    }

}