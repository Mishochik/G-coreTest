import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-columns',
    templateUrl: './columns.component.html',
    styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnInit {
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
    
    columns: Array<string> = ['thumbnail', 'title', 'publishDate', 'authors', 'publishers', 'subjects'];
    columnModel = new FormControl();

    constructor() {
        this.columnModel.valueChanges.subscribe((value) => this.onChange.emit(value))
    }
    ngOnInit() {
        this.columnModel.setValue(this.columns);
    }
}
