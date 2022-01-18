import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-square',
  templateUrl: './death-square.component.html',
  styleUrls: ['./death-square.component.css']
})
export class DeathSquareComponent implements OnInit {
  numOfTurrets: number[];

  constructor() {
    this.numOfTurrets = Array(20);
   }

  ngOnInit(): void {
  }

}
