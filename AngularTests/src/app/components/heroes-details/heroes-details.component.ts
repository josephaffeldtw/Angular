import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroModel } from '../../hero.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css'],
})
export class HeroesDetailsComponent implements OnInit {

  @Input() hero: HeroModel;

  // name = '';
  // @Output() newHero = new EventEmitter<string>();
  // formHero = new FormGroup({
  //   name: new FormControl()
  // });

  constructor() {
  }

  ngOnInit(): void {
  }

  // registerHero(): void{
  //   this.newHero.emit(this.formHero.controls.name.value);
  // }

}
