import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { SortPipe } from './app.sort'

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    NewCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
