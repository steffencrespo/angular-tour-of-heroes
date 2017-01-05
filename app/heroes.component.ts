import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

//implements OnInit to make the component call the service when it is first loaded
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  //private constructor to inject the HeroService into this component
  constructor(private heroService: HeroService) { }

  //this tells angular what to do on initialization of this component
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
