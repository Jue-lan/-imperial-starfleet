import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {
  numOfTurrets: number[];

  constructor() { 
    this.numOfTurrets = Array(20);
  }

  ngOnInit(): void {
  }

}
