import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private http: HttpClient) { 

    }
    
    pagination = {
        limit: 10,
        page: 1,
    }
    bookName: string;
    search() {
        let options = {
            q: this.bookName,
            ...this.pagination,
        };
        this.http.get('http://openlibrary.org/search.json', toHttpObject(options)).subscribe((response => {

            console.log(response);
        }))

        function toHttpObject(params) {
            return { params }
        }
    }

    ngOnInit() {
    }

}
