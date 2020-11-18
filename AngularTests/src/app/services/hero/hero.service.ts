import { Injectable } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { HeroModel } from '../../hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor( private msgService: MessageService) {
  }

  getHeroes(): Observable<HeroModel[]> {
    this.msgService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
