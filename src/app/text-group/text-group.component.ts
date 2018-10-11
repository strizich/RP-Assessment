// A simple component that allows the developer to control some display types.

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-group',
  templateUrl: './text-group.component.html',
  styleUrls: ['./text-group.component.scss'],
})

export class TextGroupComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

  groupClass() {
    if (this.type) {
      return `text__group` + '--' + this.type;
    } else {
      return 'text__group';
    }
  }
}
