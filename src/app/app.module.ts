import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    FooterComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
