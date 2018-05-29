import { Component, OnInit } from '@angular/core';
import { LuhnAlgorithm } from './algorithms/LuhnAlgorithm';
import { Xbonacci } from './algorithms/Xbonacci';
import { FoldArray } from './algorithms/FoldArray';
import { CircularSort } from './algorithms/CircularSort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Vacation Plans';

  ngOnInit() {
    let sort = new CircularSort();
    console.log(sort.countAdjacentPairs("apple     apple dog cat"));
  }
  
}
