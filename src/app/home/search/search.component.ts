import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private booksService: BooksService) {
    }

    response: any;
    @Output() onChanged = new EventEmitter();

    bookName: string;
    // pagination должен получать от PaginationComponent
    pagination = {
        limit: 10,
        page: 1,
    }
    clickSearch(bookName) {
        this.response = this.booksService.search(bookName, this.pagination);
        this.onChanged.emit(this.response);
        debugger;
    }

    ngOnInit() {
    }

}
