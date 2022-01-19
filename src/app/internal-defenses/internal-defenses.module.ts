import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DeathSquareComponent } from './death-square/death-square.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TurretComponent } from './turret/turret.component';

@NgModule({
  declarations: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ]
})
export class InternalDefensesModule { }
