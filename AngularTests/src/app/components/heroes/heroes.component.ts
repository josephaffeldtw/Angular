import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../hero.model';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[];
  selectedHero: HeroModel;

  constructor(private heroService: HeroService,
              private msgService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(list => {
      this.heroes = list;
    });
  }

  onSelect(hero: HeroModel): void {
    this.selectedHero = hero;
    this.msgService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  editHero(name: string) {
    this.selectedHero.name = name;
  }

}
