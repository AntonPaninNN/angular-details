import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngt-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class NgtParentComponent implements OnInit {

  name: string = "Anna";
  @ViewChild("parentTemplate") _template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  changeParentLabel() {
    this.name = "Vera";
  }

}
