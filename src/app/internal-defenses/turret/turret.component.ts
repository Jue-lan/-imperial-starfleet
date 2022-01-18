import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {
  numOfTurrets=Array(20);

  constructor() {
    //this.numOfTurrets = Array(20);
   }

  // @Input('turretNumber') 
  // turretNumber: any;

  ngOnInit(): void {
  }

}
