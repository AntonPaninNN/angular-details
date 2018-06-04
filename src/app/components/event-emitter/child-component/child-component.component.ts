import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() changeNameEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    this.changeNameEmitter.emit("Bill");
  }
}
