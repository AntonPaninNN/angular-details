import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("childComponent") child: ChildComponent; 

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.child.name = "Barbara";
    this.child.age = 33;
  }

}
