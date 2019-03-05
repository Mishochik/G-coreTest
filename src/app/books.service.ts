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
        this.http.get('http://openlibrary.org/search.json', toHttpObject(options)).subscribe((response => {
            console.log(response);
            return response;
        }))
        function toHttpObject(params) {
            return { params }
        }
    }
}
