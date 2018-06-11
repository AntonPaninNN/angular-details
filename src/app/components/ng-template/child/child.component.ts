import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngt-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class NgtChildComponent implements OnInit {

  name: string = "Tom";
  @Input() template: TemplateRef<any>; 

  constructor() { }

  ngOnInit() {
  }

  changeChildLabel() {
    this.name = "Alex";
  }

}
