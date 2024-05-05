import { CalendarDay } from "../CalendarDay";

export class CalendarMonth {
  private _days: CalendarDay[];
  private _month: number;
  private _year: number;

  constructor(days: CalendarDay[], year: number, month: number) {
    this._days = days;
    this._month = month;
    this._year = year;
  }

  get weeks(): Array<undefined | CalendarDay>[] {
    const weeks: Array<undefined | CalendarDay>[] = [];

    this._days.forEach((day) => {
      if (day.dayOfWeekString === "Monday" || weeks.length === 0) {
        this.addEmptyWeek(weeks);
      }
      // EU style calendar
      const index = day.dayOfWeekString === "Sunday" ? 6 : day.dayOfWeek - 1;
      weeks[weeks.length - 1][index] = day;
    });

    return weeks;
  }

  get monthString() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][this._month];
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  private addEmptyWeek(weeks: Array<undefined | CalendarDay>[]): void {
    weeks.push([...Array(7)]);
  }
}
