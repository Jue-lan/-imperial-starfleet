import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tie-fighter',
  templateUrl: './tie-fighter.component.html',
  styleUrls: ['./tie-fighter.component.css']
})
export class TieFighterComponent implements OnInit {
  numOfTieFighter: number[];

  constructor() {
    this.numOfTieFighter = Array(10);
   }

  ngOnInit(): void {
  }

}
