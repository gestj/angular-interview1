import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListFontsComponent } from './components/list-fonts.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [
     AppComponent, 
     ListFontsComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
