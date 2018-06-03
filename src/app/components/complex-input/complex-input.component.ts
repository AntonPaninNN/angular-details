import { Component, OnInit, Input } from '@angular/core';
import { InputItem } from '../../models/input-item';

@Component({
  selector: 'complex-input',
  templateUrl: './complex-input.component.html',
  styleUrls: ['./complex-input.component.css']
})
export class ComplexInputComponent implements OnInit {

  @Input() items: InputItem[];

  constructor() { }

  ngOnInit() {
  }

}
