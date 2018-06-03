import { Component } from '@angular/core';
import { InputItem } from './models/input-item';
import { InputType } from './enums/input-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: InputItem[];

  constructor() {
  this.items = [{ id: "1", labelText: "label_1", inputType: InputType.TEXT, inputValue: "" },
  { id: "2", labelText: "label_2", inputType: InputType.CHECKBOX, inputValue: "" },
  { id: "3", labelText: "label_3", inputType: InputType.DATE, inputValue: "" }];
  }

}
