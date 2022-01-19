import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {
  numOfTurrets=Array(40);

  constructor() {}

  @Input('turretNumber') 
  turretNumber: any;

  ngOnInit(): void {
  }

}
