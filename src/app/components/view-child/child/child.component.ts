import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name: string = "Emma";
  age: number = 28;

  constructor() { }

  ngOnInit() {
  }

}
