import * as styles from "../../index.module.css";
import { useEffect, useState } from "react";
import { FullDate } from "../FullDate";
import { Month } from "../Month";
import { CalendarMonth } from "../../classes/CalendarMonth";
import { getMonthData } from "../../utils/date";
import { WeekDays } from "../WeekDays";
import { useDispatch } from "../../store/store";
import { actions } from "../../store/slices";

export const App = () => {
  const [date, setDate] = useState({ year: 2024, month: 4 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.initStore());
  }, []);

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
    <div className={styles.app}>
      <FullDate month={month} nextMonth={nextMonth} prevMonth={prevMonth} />
      <WeekDays />
      <Month month={month} />
    </div>
  );
};
