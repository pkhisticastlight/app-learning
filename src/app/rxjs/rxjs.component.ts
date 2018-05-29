import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Component ({
    selector: "rxjs-learning",
    templateUrl : './rxjs.component.html'
})

export class RXJSComponent implements OnInit {
    observable: Observable<any>;
    constructor() {}

    ngOnInit() {
        this.observable = Observable.create((observer)=>{
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });
        this.observable.subscribe(
            value => console.log(value), err => {},
            () => console.log("observation is complete")
        );
    }

    ngOnDestroy() {
        //this.observable.unsubscribe();
    }
} 