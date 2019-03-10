import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-translation',
    templateUrl: './translation.component.html',
    styleUrls: ['./translation.component.css']
})

export class TranslationComponent implements OnInit {
    // img = [
    //     { routerLink: '', src: './assets/img/ru.png', language: 'ru', alt: 'ru' },
    //     { routerLink: '', src: './assets/img/us.png', language: 'en', alt: 'en' }
    // ];

    constructor(private translate: TranslateService) { }

    useLanguage(language: string) {
        this.translate.use(language);
    }

    ngOnInit() { }

}
