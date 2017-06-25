import { Component, OnInit } from '@angular/core';

import { SprintDay } from '../day/day.model';

@Component({
  selector: 'sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {
  public days: SprintDay[];
  public rows: number[];
  public capacity: number;
  public readonly daysPerWeek: number;
  public readonly maxSprintLength: number;
  public readonly minSprintLength: number;
  private numOfHolidays: number;
  private sizeOfTeam: number;
  private numOfVacationDays: number;
  private velocityValue: number;


  constructor() {
    this.days = [];
    this.daysPerWeek = 5;
    this.maxSprintLength = 30;
    this.minSprintLength = 1;
    this.numOfHolidays = 0;
    this.sizeOfTeam = 1;
    this.numOfVacationDays = 0;
    this.velocityValue = 0;
    this.capacity = 0;
  }

  set sprintLength(value: string) {
    const num = parseInt(value);

    if ((num != this.days.length) && (num <= this.maxSprintLength) && (num >= this.minSprintLength )) {
      this.days = Array.from(new Array(num).keys()).map((id) => {
        return new SprintDay(id + 1);
      });

      this.rows = Array.from(new Array(Math.ceil(this.days.length / this.daysPerWeek)).keys());

      this.calculateCapacity();
    }
  }

  get sprintLength() {
    return this.days.length.toString();
  }

  set holidays(value: string) {
    const num = parseInt(value);

    if ((this.numOfHolidays != num) && (num <= parseInt(this.maxHolidays))) {
      this.numOfHolidays = num;

      if (this.numOfHolidays > 0) {
        let num = this.numOfHolidays;
        while (num) {
          this.days[this.days.length - num].holiday = true;
          num -=1;
        }
      }

      this.calculateCapacity();
    }
  }

  get holidays() {
    return this.numOfHolidays.toString();
  }

  get maxHolidays() {
    return this.sprintLength;
  }

  get teamSize() {
    return this.sizeOfTeam.toString();
  }

  set teamSize(value: string) {
    const num = parseInt(value);

    if ((num > 1) && (this.sizeOfTeam != num)) {
      this.sizeOfTeam = num;
      this.calculateCapacity();
    }
  }

  get vacationDays() {
    return this.numOfVacationDays.toString();
  }

  set vacationDays(value: string) {
    const num = parseInt(value);

    if ((num > 1) && (this.numOfVacationDays != num)) {
      this.numOfVacationDays = num;
      this.calculateCapacity();
    }
  }

  get velocity() {
    return this.velocityValue.toString();
  }

  set velocity(value: string) {
    const num = parseInt(value);

    if ((num >= 0) && (this.velocityValue != num)) {
      this.velocityValue = num;
      this.calculateCapacity();
    }
  }

  get velocityPerPerson() {
    return this.velocityValue / this.sizeOfTeam;
  }

  calculateCapacity() {
    const idealManDays = (this.days.length * this.sizeOfTeam);
    const actualManDays = ((this.days.length - this.numOfHolidays) * this.sizeOfTeam) - this.numOfVacationDays;
    const velocityPerPerson = this.velocityValue / this.sizeOfTeam;
    const velocityPerPersonPerDay = velocityPerPerson / this.days.length;

    this.capacity = actualManDays * velocityPerPersonPerDay;
  }

  ngOnInit() {
    this.sprintLength = "10";
  }
}
