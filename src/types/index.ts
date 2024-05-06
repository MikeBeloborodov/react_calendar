import { CalendarDay } from "../classes/CalendarDay";

export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesdey = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum TimeOfDay {
  day = "day",
  night = "night",
}

export type TMonthData = CalendarDay[];

export type TNote = {
  date: string;
  dayNotes: string[];
  nightNotes: string[];
};
