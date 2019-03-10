import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    @Output() onChanged = new Subject
    
    bookName: string = '';

    constructor() { }

    ngOnInit() { }

    clickSearch() {
        this.onChanged.next(this.bookName);
    }
}
