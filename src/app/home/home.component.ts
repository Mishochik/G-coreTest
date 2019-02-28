import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userName: string;
    response: any;

    constructor(private http: HttpClient) {

    }

    search() {
        this.http.get('Https://api.github.com/users/' + this.userName)
            .subscribe((response => {
                this.response = response;
                // console.log(this.response);
            }))
    }

    ngOnInit() {
    }

}
