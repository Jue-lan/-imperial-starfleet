import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { IntervalDirective } from '../internal.directive';

@NgModule({
  declarations: [
    StarDestroyerComponent,
    TieFighterComponent,
    IntervalDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StarDestroyerComponent,
    TieFighterComponent
  ]
})
export class ExternalDefensesModule { }
