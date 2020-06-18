import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from "./topbar/topbar.component";
import { UserInputComponent } from "./userinput/userinput.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
