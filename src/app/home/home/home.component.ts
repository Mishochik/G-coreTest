import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private http: HttpClient) {

    }
  




    // columns = {
    //     img: { name: 'sfkahsljfsa', visibility: true },
    //     name: { name: 'Название', visibility: true },
    //     tom: { name: 'dbfsdf', visibility: true },
    //     url: { name: 'dsajhlksaf', visibility: true },
    //     url2: { name: 'asjflkasf', visibility: true },
    //     url3: { name: 'asjflkasf', visibility: true }
    // };

    // search() {
    //     this.http.get('http://openlibrary.org/people/george08/lists.json')
    //         .subscribe((response => {
    //             this.response = response;
    //             console.log(this.response);
    //         }))
    // }

    ngOnInit() {
    }

}