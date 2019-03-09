import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResponceInterface {
    docs: Array<any>;
    numFound: number;
    num_found: number;
    start: number;
}

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private http: HttpClient) {

    }

    search(bookName, pagination): Observable<ResponceInterface> {
        let options = {
            q: bookName,
            ...pagination,
        };
        return this.http.get('http://openlibrary.org/search.json', toHttpObject(options)).pipe(
            
        ) as any;

        function toHttpObject(params) {
            return { params }
        }
    }
}
