import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-emitter-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  protected parentName: string;

  constructor() { }

  ngOnInit() {
    this.parentName = "David";
  }

  changeParentName(newName: string) {
    this.parentName = newName;
  }
}
