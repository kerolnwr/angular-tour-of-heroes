import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{

  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name'];

  

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

    getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => {this.heroes = heroes});
    
    
  }
}


