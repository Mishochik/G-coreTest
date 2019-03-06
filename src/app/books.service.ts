import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private http: HttpClient) {

    }

    search(bookName, pagination) {
        let options = {
            q: bookName,
            ...pagination,
        };
        return this.http.get('http://openlibrary.org/search.json', toHttpObject(options));
        function toHttpObject(params) {
            return { params }
        }
    }
}
