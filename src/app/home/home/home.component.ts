import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';


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
    displayedColumns: string[] = ['thumbnail', 'title', 'publishDate', 'authors', 'publishers', 'subjects'];
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
        this.queryEmmiter
            .pipe(debounceTime(1000))
            .subscribe(() => this.loadData());
    }

    loadData() {
        this.booksService
            .search(this.bookTitle, this.paginationSearchOption)
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
        this.bookTitle = title;
        this.queryEmmiter.next();
    }

    ngOnInit() {
    }

    changePage({ pageIndex, pageSize, previousPageIndex, length }) {
        this.paginationSearchOption = {
            limit: 10,
            page: pageIndex + 1,
        }
        this.queryEmmiter.next();
    }

    updatePagination({ numFound, start }) {
        const limit = this.paginationSearchOption.limit
        this.paginationToComponent = {
            pageSize: limit,
            pageIndex: start / limit,
            length: numFound,
        }
    }

}


// const ELEMENT_DATA: PeriodicElement[] = [
//     { position: 1, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 2, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 3, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 4, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 5, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 6, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 7, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 8, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 9, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 10, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
//     { position: 11, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
// ];
