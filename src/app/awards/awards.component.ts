import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  @Input() awards: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
