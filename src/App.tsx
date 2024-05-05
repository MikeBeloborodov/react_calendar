import "./index.css";
import { useState } from "react";
import { FullDate } from "./components/FullDate";
import { Month } from "./components/Month";
import { CalendarMonth } from "./classes/CalendarMonth";
import { getMonthData } from "./utils/date";

export const App = () => {
  const [date, setDate] = useState({ year: 2024, month: 4 });
  const month = new CalendarMonth(
    getMonthData(date.year, date.month),
    date.year,
    date.month,
  );
  const nextMonth = () => {
    setDate((oldVal) => {
      if (oldVal.month < 11) {
        return { ...oldVal, month: oldVal.month + 1 };
      } else {
        return { year: oldVal.year + 1, month: 0 };
      }
    });
  };
  const prevMonth = () => {
    setDate((oldVal) => {
      if (oldVal.month > 0) {
        return { ...oldVal, month: oldVal.month - 1 };
      } else {
        return { year: oldVal.year - 1, month: 11 };
      }
    });
  };
  return (
    <div className="app">
      <FullDate month={month} nextMonth={nextMonth} prevMonth={prevMonth} />
      <Month month={month} />
    </div>
  );
};
