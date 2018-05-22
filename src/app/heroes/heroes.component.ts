import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import {HEROES} from '../services/mock-heros';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = [];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { 
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
     this.getHeros();
  }

}
