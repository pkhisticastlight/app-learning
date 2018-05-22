import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
}
