import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    constructor(private http: HttpClient) {
        // https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json'
        // http://openlibrary.org/api/get?key=/b/OL1001932M
        // http://openlibrary.org/people/george08/lists.json'
        this.http.get('http://openlibrary.org/people/george08/lists.json')
            .subscribe((response => {
                this.response = response;
                console.log(this.response);
            }))
    }
    response: any;
    
    ngOnInit() {
    }

}
