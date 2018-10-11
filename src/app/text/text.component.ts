import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() status: string;
  @Input() type: string;
  constructor() {
  }

  ngOnInit() {

  }

  statusClass() {
    const statusClass = this.status;
    const typeClass = this.type;
    if (!this.status) {
      return `text text__${typeClass}`;
    } else {
      return `text text__${typeClass} text__${typeClass}--${statusClass}`;
    }
  }
}
