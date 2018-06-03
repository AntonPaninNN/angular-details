import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComplexInputComponent } from './components/complex-input/complex-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ComplexInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
