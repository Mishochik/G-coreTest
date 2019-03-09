import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    constructor() { }

    displayedColumns: string[] = ['position', 'thumbnail', 'title', 'publishDate', 'authors', 'publishers', 'subjects'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    // TODO: прокидывать в ColumnsComponent
    // columns = [
    //     { id: 1, name: 'Thumbnail', visibility: true },
    //     { id: 2, name: 'Title', visibility: true },
    //     { id: 3, name: 'Publish date', visibility: true },
    //     { id: 4, name: 'Authors', visibility: true },
    //     { id: 5, name: 'Publishers', visibility: true },
    //     { id: 6, name: 'Subjects', visibility: true }
    // ];

    @Input() rows: any;

}


const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 2, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 3, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 4, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 5, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 6, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 7, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 8, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 9, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 10, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
    { position: 11, thumbnail: 'item.title,', title: 'item.title', publishDate: 'item.title', authors: 'item.tit', publishers: 'item.title', subjects: 'item.title' },
];
// generateRows(this.rows ,ELEMENT_DATA);

function generateRows(rows, array) {
    if (!rows)
        return;
    rows.docs.forEach(function (item, i) {
        const object = {
            position: i,
            thumbnail: item.title,
            title: item.title,
            publishDate: item.title,
            authors: item.title,
            publishers: item.title,
            subjects: item.title
        };
        array.push(object);
    });
}