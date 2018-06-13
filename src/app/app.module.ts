import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComplexInputComponent } from './components/complex-input/complex-input.component';
import { ChildComponentComponent } from './components/event-emitter/child-component/child-component.component';
import { ParentComponentComponent } from './components/event-emitter/parent-component/parent-component.component';
import { ParentComponent } from './components/view-child/parent/parent.component';
import { ChildComponent } from './components/view-child/child/child.component';
import { NgtChildComponent } from './components/ng-template/child/child.component';
import { NgtParentComponent } from './components/ng-template/parent/parent.component';
import { NcnsComponent } from './components/ng-class-ng-style/ncns/ncns.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplexInputComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    ParentComponent,
    ChildComponent,
    NgtChildComponent,
    NgtParentComponent,
    NcnsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
