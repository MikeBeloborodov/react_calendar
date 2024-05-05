import { CalendarDay } from "../classes/CalendarDay";
import { TMonthData } from "../types";

export const getMonthData = (year: number, month: number): TMonthData => {
  const monthData: TMonthData = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    monthData.push(
      new CalendarDay(year, month, day, new Date(year, month, day).getDay()),
    );
  }
  return monthData;
};
