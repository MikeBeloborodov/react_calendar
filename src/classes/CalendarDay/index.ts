import { DayOfWeek } from "../../types";

export class CalendarDay {
  private _year: number;
  private _month: number;
  private _date: number;
  private _dayOfWeek: DayOfWeek;

  constructor(year: number, month: number, date: number, dayOfWeek: DayOfWeek) {
    this._year = year;
    this._month = month;
    this._date = date;
    this._dayOfWeek = dayOfWeek;
  }

  get year() {
    return this._year;
  }

  get month() {
    return this._month;
  }

  get date() {
    return this._date;
  }

  get dayOfWeek() {
    return this._dayOfWeek;
  }

  get dayOfWeekString() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[this._dayOfWeek];
  }
}
