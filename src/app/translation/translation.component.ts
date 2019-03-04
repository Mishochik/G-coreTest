import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-translation',
    templateUrl: './translation.component.html',
    styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

    constructor() { }

    img = [
        { routerLink: '', src: './assets/img/ru.png', alt: 'ru' },
        { routerLink: '', src: './assets/img/us.png', alt: 'us' }
    ];

    ngOnInit() {
    }

}
