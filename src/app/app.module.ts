import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DayComponent } from './day/day.component';
import { SprintComponent } from './sprint/sprint.component';

@NgModule({
  declarations: [
    FooterComponent,
    RootComponent,
    HomeComponent,
    DayComponent,
    SprintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
