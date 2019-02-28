import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Open Library ';
    menu = [
        { routerLink: '/', text: 'Home' },
        { routerLink: 'FavoriteBooks', text: 'Favorite boocks' }
    ];
    img = [
        { urouterLinkrl: '#', src: 'assets/img/ru.png', alt: 'ru' },
        { routerLink: '#', src: 'assets/img/us.png', alt: 'us'}
    ];
}
