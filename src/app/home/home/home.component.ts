import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { BooksService, ResponceInterface } from 'src/app/books.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { BookModel } from './book.model';

export interface PeriodicElement {
    position: number;
    thumbnail: string;
    title: string;
    publishDate: string;
    authors: string;
    publishers: string;
    subjects: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    displayedColumns: string[] = [];
    dataSource = new MatTableDataSource<PeriodicElement>();

    private queryEmmiter = new Subject();
    bookTitle = "";

    paginationSearchOption = {
        limit: 10,
        page: 1,
    }

    paginationToComponent = {
        pageSize: 0,
        length: 0,
        pageIndex: 0,
    };

    rows: Array<any> = [];

    constructor(private booksService: BooksService) {
        this.resetPagination();
        this.queryEmmiter
            .pipe(debounceTime(1000))
            .subscribe(() => this.loadData());
    }

    changeShowColums(colums) {
        this.displayedColumns.length = 0;
        this.displayedColumns.push(...colums);
    }

    updateDate(response: ResponceInterface) {
        response.docs = response.docs.map((doc) => new BookModel(doc));
        // console.log('response => ', response);
        return response;
    }

    loadData() {
        this.booksService
            .search(this.bookTitle, this.paginationSearchOption)
            .pipe(
                map((data) => this.updateDate(data)),
            )
            .subscribe(response => {
                const pagination = {
                    numFound: response.numFound,
                    start: response.start,
                }

                this.updatePagination(pagination);
                this.dataSource.data = response.docs;
            });
    }

    onChanged(title) {
        console.log('title=>', title)
        this.bookTitle = title;
        this.resetPagination();
        this.queryEmmiter.next();
    }

    ngOnInit() { }

    changePage({ pageIndex }) {
        this.paginationSearchOption = {
            limit: 10,
            page: pageIndex + 1,
        }
        this.queryEmmiter.next();
    }

    resetPagination() {
        this.paginationSearchOption = {
            limit: 10,
            page: 1,
        }
    }

    updatePagination({ numFound, start }) {
        const limit = this.paginationSearchOption.limit
        this.paginationToComponent = {
            pageSize: limit,
            pageIndex: start / limit,
            length: numFound,
        }
    }

    clickRow(row) {
        console.log(row);
    }

}
