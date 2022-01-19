import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { InfoWindowComponent } from './info-window/info-window/info-window.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoWindowComponent,
  ],
  imports: [
    BrowserModule,
    ExternalDefensesModule,
    InternalDefensesModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
