import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/books.service';

@Component({
    selector: 'app-book-description',
    templateUrl: './book-description.component.html',
    styleUrls: ['./book-description.component.css']
})
export class DetailedDescriptionComponent implements OnInit {

    book:object;
    constructor(
        protected activatedRoute: ActivatedRoute,
        protected booksService: BooksService
    ) { }

    ngOnInit() {
        const bookId = this.activatedRoute.snapshot.params.id;
        this.loadBook(bookId).subscribe(data => {
            this.book = data[bookId];
        })
    }

    loadBook(id: string): Observable<any> {
        return this.booksService.get(id);
    }

}
