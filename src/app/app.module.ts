import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontsizeeditComponent } from './fontsizeedit/fontsizeedit.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsizeeditComponent,
    PetComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
