import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

export interface Tag {
    name: string;
}

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

    @Input() bookId: string;
    @Input() book: object;

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    favoriteList: object = JSON.parse(localStorage.getItem('favoriteList')) || new Object;

    tags: Tag[] = [];

    constructor() { }

    add(event: MatChipInputEvent): void {
        if (!this.tags.length)
            this.favoriteList[this.bookId] = {
                book: this.book,
                tags: this.tags
            };

        const input = event.input;
        const value = event.value;

        // Add our Tag
        if ((value || '').trim()) {
            if (this.tags.length === 0) {

            }

            this.tags.push({ name: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }

        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));
    }

    remove(Tag: Tag): void {

        const index = this.tags.indexOf(Tag);

        if (index >= 0) {
            this.tags.splice(index, 1);
        }

        if (!this.tags.length) {
            delete this.favoriteList[this.bookId]
        }

        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));
    }

    ngOnInit() {
        if (this.favoriteList[this.bookId])
            this.tags = this.favoriteList[this.bookId].tags;
    }
}
