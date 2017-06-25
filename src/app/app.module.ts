import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    FooterComponent,
    RootComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
