import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-anims',
  templateUrl: './anims.component.html',
  styleUrls: ['./anims.component.scss'],
  animations: [
    trigger('angularAnim', [
      state('inactive', style({
       left: '16px',
       top: '16px',
       transform: 'rotateZ(0deg)'
      })),
      state('active', style({
        left: '50%',
        top: '50%',
        transform: 'rotateZ(180deg)',
        backgroundColor: 'green'
      })),
      transition('active => inactive', [
        animate('0.6s ease-in-out')
      ]),
      transition('inactive => active', [
        animate('0.6s ease-in-out')
      ]),
    ]),
  ],
})

export class AnimsComponent implements OnInit {
  cssAnim: boolean;
  ngAnim: boolean;

  constructor() {
    this.cssAnim = false;
    this.ngAnim = false;
  }

  ngOnInit() {
  }
  animTrigger() {
    this.cssAnim = !this.cssAnim;
   }
   toggle() {
     this.ngAnim = !this.ngAnim;
   }
}
