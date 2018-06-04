import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComplexInputComponent } from './components/complex-input/complex-input.component';
import { ChildComponentComponent } from './components/event-emitter/child-component/child-component.component';
import { ParentComponentComponent } from './components/event-emitter/parent-component/parent-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ComplexInputComponent,
    ChildComponentComponent,
    ParentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
