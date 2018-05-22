import { Component, OnInit } from '@angular/core';
import { LuhnAlgorithm } from './algorithms/LuhnAlgorithm';
import { Xbonacci } from './algorithms/Xbonacci';
import { FoldArray } from './algorithms/FoldArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learning app';

  ngOnInit() {
  }
  
}
