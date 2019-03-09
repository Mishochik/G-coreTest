import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-columns',
    templateUrl: './columns.component.html',
    styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {

    constructor() { }

    // switch(id, item) {
    //     debugger;
    // }

    // columns = [
    //     { id: 1, name: 'Название', visibility: true },
    //     { id: 2, name: 'sfkahsljfsa', visibility: true },
    //     { id: 3, name: 'dbfsdf', visibility: true },
    //     { id: 4, name: 'dsajhlksaf', visibility: true },
    //     { id: 5, name: 'asjflkasf', visibility: true }
    // ];

    ngOnInit() {
    }
    
    column = new FormControl();
    columns: string[] = ['No.', 'Extra cheese', 'Thumbnail', 'Title', 'Publish date', 'Authors', 'Publishers', 'Subjects'];

}
