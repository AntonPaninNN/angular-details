import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ncns',
  templateUrl: './ncns.component.html',
  styleUrls: ['./ncns.component.css']
})
export class NcnsComponent implements OnInit {

  isHidden: boolean;
  color: string;

  constructor() { }

  ngOnInit() {
    this.isHidden = false;
    this.color = "red";
  }

  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }

  toggleColor() {
    this.color === "black" ? this.color = "red" : this.color = "black";
  }

}
