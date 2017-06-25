import { Component, OnInit, Input } from '@angular/core';

import { SprintDay } from './day.model';

@Component({
  selector: 'sprint-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: SprintDay;

  constructor() { }

  ngOnInit() {
  }

}
